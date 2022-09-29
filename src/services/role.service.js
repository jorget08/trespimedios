const {Role} = require('../db');

class RoleService{
    constructor(){}

    async create(data){
        const newRole = await Role.create(data);
        return newRole;
        }
    
}

module.exports = RoleService;