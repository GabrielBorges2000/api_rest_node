# Para criar uma API é necessário rotas

- Criar usuário
-Listagem de usuário
-Edição de usuário
Remoção de usuário

# HTTP

    - Método HTTP
    - URL 

# Metodos mais usados:
    
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

# Formas de enviar informação

-Query Parameters : URL Stateful => Filtros, paginação, não-obrigatórios
-Route Parameters : Identificação de Recurso 
-Request Body : Envio de informação de formulário

http://localhost:3333/users?userId=1  <!-- Query Parameters -->
http://localhost:3333/users/1  <!-- Route Parameters -->
http://localhost:3333/users  <!-- Request Body Parameters -->





