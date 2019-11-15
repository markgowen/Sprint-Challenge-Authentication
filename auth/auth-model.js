const db = require('../database/dbConfig')

module.exports = {
    add,
    find,
    findBy,
    findById
}

function find() {
    return db('users').select('id', 'username');
};

function findBy(filter) {
    return db('users').where(filter);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

function add {
    return db('users')
        .insert('users')
        .then(ids => {
            return findById(ids[0]);
        })
}
