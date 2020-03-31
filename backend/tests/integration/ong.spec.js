const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback() //zerando o bd antes de começar um teste
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new ong', async () => {
    const response = await request(app).post('/ongs').send({ //para testar rotas de criação que precisão do header, basta inserir .set('authorization', 'id_valido')
      name: "ONG Teste",
      email: "teste@ong.com.br",
      whatsapp: "1699990000",
      city: "Teste City",
      uf: "ST"
    }) 
    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(16)
  })
})