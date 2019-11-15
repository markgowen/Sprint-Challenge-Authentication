const request = require('supertest')
const authRouter = require('./auth-router')
const db = require('../database/dbConfig')

describe('The auth-router', () => {

    beforeEach(async () => {
        await db('users').truncate();
    })

    describe
})