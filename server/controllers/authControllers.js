const User = require("../models/userModel");

const home = (req, res) => {
    try {
        res.send("Welcome to the home controller");
    } catch (error) {
        res.status(500).send("Server Error");
    }
}

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400).send("User already exists");
        } else {
            const userCreated = await User.create({
                username,
                email,
                password,
            });
            res.status(201).send(userCreated);
            console.log("User already exists")
        }
    } catch (error) {
        res.status(500).send("Server Error");
        console.log("registration failed")
    }
}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).send("Login Successful");
            console.log("Login Successful");
        } else {
            res.status(401).send("Username or Password Does not Match");
            console.log("Username or Password Does not Match");
        }
    } catch (error) {
        res.status(500).send("An error occurred during login");
        console.error("Error during login:", error);
    }
};


module.exports = { home, register, Login };
