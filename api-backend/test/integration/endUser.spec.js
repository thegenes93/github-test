const request = require('supertest');
const app = require('../../src/app');

describe('USER', () => {

    it('should be able to get user', async () => {
        jest.setTimeout(30000);
        const user = await request(app)
            .get(`/api/users?since=${0}`)

        const username = await user.body[1]

        const response = await request(app)
            .get(`/api/users/${username.login}/details`)

        expect(response.body.id).toBe(username.id)
    })

})