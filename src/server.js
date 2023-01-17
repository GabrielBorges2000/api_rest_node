import http from 'node:http';

/* Para criar uma API é necessário rotas

- Criar usuário
-Listagem de usuário
-Edição de usuário
Remoção de usuário

-HTTP

    - Método HTTP
    - URL 

- Metodos mais usados:
    
    GET => Buscar uma informação do back-end
    POST => Criar uma informação do back-end
    PUT =. Atualizar um recurso no back-end, no caso muitas informação de uma unica vez
    Patch => Atualizar uma informação especifica de um recurso no back-end
    DELETE =. Deletar algo no meu back-end

    a jusção do metodo e da url que gera a minha ação, exemplo: 

    GET /user => Buscando usuário no back-end
    POST /user = Criar um usuário no back-end

    Tipos de dados:

    Stateful : armazega o informação em memoria e depois apaga
    stateless : armazena informação no banco de dados

    JSON : JavaScript Object Notation 

    HTTP STATUS CODE : 100, 200, 300, 400, 500


*/

const users = []

const server = http.createServer(async (req, res) => {
    const {method, url} = req

    const Buffers = []

    for await (const chunk of req) {
        Buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(Buffers).toString())
    } catch {
        req.body = null
    }

        
    if(method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users'){
        const {id, name, email} = req.body

        users.push({
            id,
            name,
            email,
        })

        return res.writeHead(201).end()
    }    

    return res.writeHead(404).end()
})

server.listen(3333)

console.log('Rodando!')