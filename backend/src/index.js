const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

/**
 * Função utilizada para que o aplicativo antecipe a utilização de formato JSON nas requisições
 * possibilitando assim a troca de informações nesse formato.
 */
app.use(cors())
app.use(express.json())
app.use(routes)

/**
 * Chamamos de recurso o que vem após a "/" na rota, por exemplo /users
 * Rota é o caminho todo, ou seja dominio + recurso, por exemplo http://localhost:3333/users
**/

/**
 * Métodos HTTP, são os métodos que utilizamos para fazer uma requisição ao back-end
 * GET: buscar/listar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 * 
 * Apesar de ser possível fazer todas as operações com o metodo GET (apesar de alguns obstaculos),
 * utilizamos os metodos descritos como forma de semantica.
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: são parâmetros nomeados que são enviados na URL após um "?", são geralmente utilizados para (filtros, paginação e etc) 
  * Por exemplo se quisermos listar usuários com nome Mateus, a rota seria /users?nome=Mateus
  * ainda podemos anexar mais de um parametro utilizando o "&", por exemplo exibir a página 2
  * na consulta de usuarios com nome Mateus, ficando a rota como /users?page=2&nome=Mateus
  * 
  * Route Params: São geralmente utilizados para identificar recursos. Mais precisamente um unico recurso
  * Por exemplo, utilizamos o Route Params quando queremos buscar/deletar um unico usuario
  * assim a rota ficaria /users/:id, informando assim que tudo o que vem após "/users/" é o ID de um usuario
  * 
  * Request Body: São parametros enviados no corpo da requisição, geralmente utilizado para criar/alterar recursos
  * Por exemplo, criar e alterar usuarios.
  * Em API's rest/restfull o corpo da requisição é sempre em formato JSON
  * 
  * Esses parametros são acessados através do parametro request do metodo HTTP utilizado.
  * Para acessalos, podemos definir uma constante qualquer, onde seu valor será igual a:
  * 
  * resquest.query : para acessar os Query Params
  * request.params: para acessar os Route Params
  * request.body: para acessar os parametros enviado no Body da requisição
  */

app.listen(3333)