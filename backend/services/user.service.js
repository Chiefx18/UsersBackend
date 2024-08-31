const { User } = require('../models/');

const userService = {}

userService.getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    }
    catch (err) {
        throw new Error(err.message);
    }

};
userService.getSpecificUser = async (userId) => {
    try {
        const users = await User.findAll({where :{id: userId}});
        return users;
    }
    catch (err) {
        throw new Error(err.message);
    }

};
userService.addUser = (data) => {
    try{
        const users = User.create({
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            email: data.email,
            mobile: data.mobile}
        )
        return users;
    }catch(err){
        throw new Error(err.message);
    }
};
userService.editUser =async  (userId, data) => {
    try{
        const [affectedRows] = await User.update(data, {
            where: { id: userId }
        });
        if(affectedRows===0){
            throw new Error('User not found or no changes were made.');
        }
    }catch(err){
        throw new Error(err.message);
    }

};
userService.deleteUser = async (userId) => {
    try{
        const users = await User.destroy({ where: { id: userId }});
        return users;
    }catch(err){
        throw new Error(err.message);
    }

};

module.exports = userService;
