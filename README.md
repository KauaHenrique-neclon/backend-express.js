### API de Tarefas
Esta API simples de tarefas permite gerenciar uma lista de tarefas. Você pode criar, ler, atualizar e excluir tarefas (CRUD).

### Rotas
 - GET /tasks
Retorna todas as tarefas.

 - Controller: tasksControllers.getAll



#### POST /tasks
 - Cria uma nova tarefa.

 - Middleware: taskMiddlewares.ValidarTasks (para validar os dados da requisição)

 - Controller: tasksControllers.createTaskFunc



#### DELETE /tasks/:id

 - Deleta uma tarefa específica pelo ID.

 - Controller: tasksControllers.deleteTask

 - Parâmetros de URL:
   - id: O ID da tarefa a ser excluída.

#### PUT /tasks/:id

 - Atualiza uma tarefa específica pelo ID.

 - Middleware: taskMiddlewares.ValidarTaskUpdate (para validar os dados da atualização)

 - Controller: tasksControllers.deleteTask

 - Parâmetros de URL:
   - id: O ID da tarefa a ser atualizada.

### Tecnologias
 - Express.js: Framework para o servidor web.

 - Node.js: Ambiente de tempo de execução.

#### Estrutura do Projeto (Exemplo)


├── controllers/
│   └── tasksController.js
├── middlewares/
│   └── tasksMiddleware.js
├── routes.js  <-- Este arquivo
└── app.js