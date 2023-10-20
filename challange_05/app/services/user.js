const userRepo = require("../repositories/user.js");
const authServices = require("./auth.js");
const ApplicationError = require("../../error/ApplicationError.js");

exports.createUser = async (requestBody, isAdmin) => {
  try {
    const { name, email, password, confPassword } = requestBody;

    // Compare input password
    if (password !== confPassword) {
      throw new ApplicationError(`Password Invalid`, 400);
    }

    // Check user already registered on not
    const user = await userRepo.findUserByEmail(email);
    if (user) {
      throw new ApplicationError(`Email Already use in other user`, 400);
    }

    // Hash Password
    const hashPassword = await authServices.enCryptedPassword(password);

    const body = {
      name,
      email,
      password: hashPassword,
      role : isAdmin ? "admin" : "member"
    };

    const newUser = await userRepo.create(body);

    return newUser;
  } catch (error) {
    throw new ApplicationError(error.message, 500);
  }
};

exports.login = async (requestBody) => {
    try {
        const { email, password, role } = requestBody;

        const currentUser = await userRepo.findUserByEmail(email);
        const currentUserRole = currentUser.role;
        const currentUserPassword = currentUser.password;
      
        // Check if your email has been registered or not
        if (!currentUser) {
          throw new ApplicationError(`Email is not regsitered`, 400);
        }
      
        // Ckeck role in your account
        if (role !== currentUserRole) {
          throw new ApplicationError(`Role is incorrect`, 400);
        }
      
        // Check password
        const checkPassword = await authServices.comparePassword(
          password,
          currentUserPassword
        );
        if (!checkPassword) {
          throw new ApplicationError(`Password is incorrect`, 400);
        }
      
        return currentUser;
    } catch (error) {
        throw new ApplicationError(error.message, 500);
    }
};


exports.findUserById = async (id) => {
  try {
    const user = await userRepo.findUserById(id);
    if(!user) {
      throw new ApplicationError(`User not found`, 400);
    }
    return user
  } catch (error) {
    throw new ApplicationError(error.message, 500);
  }
}