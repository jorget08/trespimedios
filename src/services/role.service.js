const {Role} = require('../db');

class RoleService{
    constructor(){}

    async create(data){
        const newRole = await Role.create(data);
        return newRole;
        }

    async find(id){
        const role = await Role.findByPk(id);
        return role;
    }
    
}

module.exports = RoleService;