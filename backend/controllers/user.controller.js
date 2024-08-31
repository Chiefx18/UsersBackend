const userService = require('../services/user.service');
const userController = {};

userController.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
userController.getSpecificUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await userService.getSpecificUser(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
userController.addUser = async (req, res) => {
    try {
        const data = req.body;
        const user = await userService.addUser(data);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
userController.editUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const data = req.body;
        const user = await userService.editUser(userId, data);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
userController.deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const data = req.body;
        const user = await userService.deleteUser(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = userController;
