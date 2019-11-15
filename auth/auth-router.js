require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcryptjs");

const JWT = require("./token");
const Users = require("./auth-model");
const restricted = require("./authenticate-middleware");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log("Error..", err);
      res.status(500).json(err);
    });
});

router.post("/register", (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      const token = JWT.generateToken(saved);
      res.status(201).json({ user: saved, token });
    })
    .catch(err => {
      console.log("Error..", err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = JWT.generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}!`, token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(err => {
      console.log("Error..", err);
      res.status(500).json(err);
    });
});

module.exports = router;
