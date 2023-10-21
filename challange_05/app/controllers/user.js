const userServices = require("../services/user.js");
const authServices = require("../services/auth.js");

const createUserMember = async (req, res) => {
  try {
    const body = req.body;
    const newUser = await userServices.createUser(body, false);
    res.status(201).json({ status: "Ok", message: "Success", data: newUser });
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: error.message,
    });
  }
};

const createUserAdmin = async (req, res) => {
  try {
    const body = req.body;
    const newUser = await userServices.createUser(body, true);
    res.status(201).json({ status: "Ok", message: "Success", data: newUser });
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const body = req.body;
    const user = await userServices.login(body);
    const userId = user.id;
    const email = user.email;
    const role = user.role;
    const acessToken = authServices.createAccessToken({ userId, email, role });
    const refreshToken = authServices.createRefreshToken({
      userId,
      email,
      role,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      max: 24 * 60 * 60 * 1000,
    });
    res
      .status(200)
      .json({ status: "Ok", message: "Success", data: user, acessToken });
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: error.message,
    });
  }
};

const logout = (req, res) => {
  try {
    res.clearCookies("refreshToken");
    res.status(200).json({ status: "Ok", message: "Logout Success" });
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: error.message,
    });
  }
};

const currentUser = (req, res) => {
  try {
    res.status(200).json({ status: "Ok", message: "Success", data: req.user });
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: error.message,
    });
  }
}

const refreshToken = (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const user = authServices.verifyToken(
      refreshToken,
      process.env.REFRESH_TOKEN
    );
    const userId = user.userId;
    const email = user.email;
    const role = user.role;
    const accessToken = authServices.createAccessToken({ userId, email, role });
    res.status(200).json({ status: "Ok", message: "Success", accessToken });
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: error.message,
    });
  }
};

module.exports = {
  createUserMember,
  createUserAdmin,
  login,
  logout,
  currentUser,
  refreshToken,
};
