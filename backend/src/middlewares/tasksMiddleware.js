const { request, response } = require("express");

const ValidarTasks = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined){
        return response.status(400).json({ message : 'the field "title" is requirend ' })
    }

    if (body.title === ''){
        return response.status(400).json({ message : 'title não pode ser vazio' })
    }
    next();
};


const ValidarTaskUpdate = (request , response, next) => {
    const { body } = request;

    if (body.status === undefined){
        return response.status(400).json({ message : 'Precisa de todos os campos preenchidos' })
    }

    if (body.status === ''){
        return response.status(400).json({ message : 'Precisa de todos os campos preenchidos' })
    }
    next();
}

module.exports = {
    ValidarTasks,
    ValidarTaskUpdate,
}