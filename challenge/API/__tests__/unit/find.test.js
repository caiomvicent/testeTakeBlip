require('dotenv').config()
const request = require('supertest')
const app = require('../../src/app')

describe('Find', () => {
    it('Buscar dados da Api publica do github', async () => {
        const response = await request(app)
            .get('/')

        expect(response.status).toBe(200)
    })

})