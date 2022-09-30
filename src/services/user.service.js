const {User, Role} = require('../db');
const bcrypt = require('bcrypt');


class UserService{
    constructor(){
    
    }
    async find(){
        const users = await User.findAll();
        return users;
    }

    async create(data){
        const hash = await bcrypt.hash(data.password, 10);
        const newUser = await User.create({...data, password: hash});
        delete newUser.dataValues.password;
        return newUser;
    }

    async delete(id){
        const user = await User.findOne(id);
        await user.destroy();
        return {response: true};
    }

    async findOne(id){
        const user = await User.findByPk(id);
        return user;
    }

    async findByUsername(username){
        const user = await User.findOne({
            where: {
                username,
            },
            include: {
                model: Role
            }
        });
        return user;
    }
}

module.exports = UserService;