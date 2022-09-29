const {User} = require('../db');

class UserService{
    constructor(){
    
    }
    async find(){
        const users = await User.findAll();
        return users;
    }

    async create(data){
        const newUser = await User.create(data);
        return newUser;
    }

    async delete(id){
        const user = await User.findOne(id);
        await user.destroy();
        return {response: true};
    }

    async findOne(id){
        const user = await User.findOne(id);
        return user
    }
}

module.exports = UserService;