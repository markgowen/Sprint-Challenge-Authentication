require('dotenv').config()
const router = require('express').Router();
const bcrypt = require('bcryptjs')

const JWT = require('./token')
const Users = require('./auth-model')


router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
