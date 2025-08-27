const connect = require('./connection');

const getAll = async (request, response) => {
    try {
        const [tasks] = await connect.query('SELECT * FROM task');
        return tasks;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const createTask =  async (task) => { // task é um objeto que vamos receber
    try{
        console.log(task);
        const { title } = task;   // dentro do objeto, vamos tirar só o titulo
        const dateUTC = new Date(Date.now()).toUTCString();  // pegando data atual
        const query = 'INSERT INTO task(title,status,created_at) VALUES ($1, $2, $3) RETURNING *';
        const values = [title, 'pendente', dateUTC];
        const crinadoTask = await connect.query(query, values);
        return crinadoTask.rows[0];
    }catch(error){
        console.error("Erro do try-catch" + error);
        throw error;
    }
};


const deleteTask = async (id) => {
    const apagandoTask = await connect.query('DELETE * FROM task WHERE id = $1', id);
    return apagandoTask;
};


const updateTask = async (id , task ) => {

    const { title , status } = task;
    const values = [title , status, id]
    const query = 'UPDATE task SET title = $1, status = $2 WHERE = $3';
    const updateTask = await connect.query(query , values);
    return updateTask;
};


module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
}