const authServices = require("../services/auth.js");
const userServices = require("../services/user.js");

const userAuthorized = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "unauthorized" });
    }
    const authHeader = req.headers.authorization;
    const beareeToken = authHeader.split(" ");
    const token = beareeToken[1];
    const user = authServices.verifyToken(token, process.env.ACCESS_TOKEN);
    req.userId = user.userId;
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: error.message,
    });
  }
};

const onlySuperAdmin = async (req, res, next) => {
  try {
    const id = req.userId;
    const user = await userServices.findUserById(id);

    if (user.role !== "superadmin") {
      return res.status(403).json({
        status: "FAIL",
        message: "Access not allowed",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: error.message,
    });
  }
};

const onlyAdminAndSuperAdnmin = async (req, res, next) => {
  try {
    const id = req.userId;
    const user = await userServices.findUserById(id);
    console.log(user.role);
    if (user.role !== "admin" && user.role !== "superadmin") {
     return res.status(403).json({
        status: "FAIL",
        message: "Access not allowed",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: error.message,
    });
  }
};

module.exports = { userAuthorized, onlySuperAdmin, onlyAdminAndSuperAdnmin };
