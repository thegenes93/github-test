const request = require('supertest');
const app = require('../../src/app');

describe('USER', () => {
    // afterAll(() => setTimeout(() => process.exit(), 1000))

    it('should be able to get user repositories ', async () => {
        jest.setTimeout(30000);
        const user = await request(app)
            .get(`/api/users?since=${0}`)

        const username = await user.body[1]

        const response = await request(app)
            .get(`/api/users/${username.login}/repos`)

        expect(response.body[0].owner.id).toBe(username.id)
    })

})