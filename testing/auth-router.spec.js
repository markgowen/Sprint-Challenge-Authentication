const request = require('supertest')
const authRouter = require('../auth/auth-router')
const db = require('../database/dbConfig')
const server = require('../api/server')

describe('The auth-router', () => {

    beforeEach(async () => {
        await db('users').truncate();
    })

    describe('GET /users', () => {
        it('Should return status 401', async () => {
            return await request(server)
                .get('/users')
                
            expect(res.status).toBe(401);
        });

        it('Should return the correct object', async () => {
            return await request(server)
                .get('/users')
            
            expect(res.type).toBe('/application/json')
        });
    });
});