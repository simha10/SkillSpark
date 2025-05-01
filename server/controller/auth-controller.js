const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send("Hello World! using controllers");
    } catch (err) {
        console.log(err);
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "email already exists" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Original Password:", password);
        console.log("Hashed Password:", hashedPassword);

        const UserCreated = await User.create({
            username,
            email,
            phone,
            password: hashedPassword, // Save hashed password
        });

        res.status(201).send({
            msg: "Registration Successful",
            token: await UserCreated.generateToken(),
            userId: UserCreated._id.toString(),
        });
    } catch (err) {
        console.error("Registration error:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            console.log("Password from request:", password);
            console.log("Hashed password from database:", userExist.password);

            const isMatch = await bcrypt.compare(password, userExist.password);
            console.log("Password match result:", isMatch);
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log("Rehashed Password:", hashedPassword);
            const testMatch = await bcrypt.compare(password, hashedPassword);
            console.log("Test Match Result (should be true):", testMatch);

            if (isMatch) {
                res.status(200).json({
                    msg: "Login Successful",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString(),
                });
            } else {
                res.status(401).json({ msg: "Invalid Credentials" });
            }
        } else {
            res.status(400).json({ msg: "Invalid Credentials" });
        }
    } catch (error) {
        // res.status(500).json("Internal Server Error");
        next(error);
    }

};

const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({ msg: userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };

module.exports = { home, register, login, user };