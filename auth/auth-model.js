const db = require("../database/dbConfig");

module.exports = {
  insert,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function insert(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return db('users')
        .where({ id: ids[0] })
        .first();
    });
}
