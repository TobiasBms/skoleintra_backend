const {models, model} = require('../../db');
const { getIdParam } = require('../utils');


async function getAll(req,res){
    const privilege = await models.Privilege.findAll();
    res.send(200, privilege);
}

async function getById(req,res) {

    try{
        const id = getIdParam(req);
        const privilege = await models.Privilege.findByPk(id);
        res.send(200, privilege);

    }catch(error){
        res.send(401, {
            message: error.message
        })
    }
}

module.exports = {
    getAll,
    getById
}