const express = require('express');
const router = express.Router();


// const {home, register} = require("../controller/auth-controller");
//while creating lot of pages,it will become complicate to write all the nmare of register,home,server here
//insted of that we can write the above code by creating a referance
const authControllers = require("../controller/auth-controller");
const validate = require("../middleware/validate-middleware");
const {registerSchema} = require("../validators/auth-validator");
const authMiddleware = require("../middleware/authMiddleware");

// router.route("/").get((req, res) => {
//     res.status(200).send("Hello World! using routers");
// });

// instead of this after creating controller folder like auth-controller.js file, we can write
router.route("/").get(authControllers.home);// this will call the home function from auth-controller.js file

// router.route("/register").get((req, res) => {
//     res.status(200).send("Register Page using routers");
// }); here also we can write
router.route("/register").get(authControllers.register);// this will call the register function from auth-controller.js file
router.route("/register").post(validate(registerSchema), authControllers.register); // Added POST route for registration
router.route("/login").post(authControllers.login); // Added POST route for login
router.route("/user").get(authMiddleware, authControllers.user); // Added GET route for user profile
module.exports = router;
