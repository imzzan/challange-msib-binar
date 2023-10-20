const express = require('express');
const { createUserMember, createUserAdmin, login, logout, refreshToken } = require('../controllers/user.js');
const {userAuthorized, onlySuperAdmin} = require('../middleware/auth.js')

const router = express.Router();

router.post('/register-member', createUserMember);
router.post('/register-admin', userAuthorized, onlySuperAdmin, createUserAdmin);
router.post('/login', login);
router.delete("/logout", logout);
router.get('/refresh-token', refreshToken)

module.exports = router