require("dotenv").config();
const express = require('express');
const cors = require("cors")
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-route");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");


const corsOptions = {
    origin: ["http://localhost:5173"],
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials : true
};
app.use(cors(corsOptions));
app.use(express.json());


app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use(errorMiddleware);


const PORT = 5000;

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});


// app.get("/", (req, res) => {
//     res.status(200).send("Hello World!");
// });

// app.get("/register",(req,res) =>{
//     res.status(200).send("Register Page");
// });

// app.get("/about",(req,res) =>{
//     res.status(200).send("About Page");
// });


// by appearing to localhost:3000, the server will doesn't show anything as the routers are now connected to the server
// u have to write localhost:3000/api/auth to see the output
//by uncommenting the above code, the server will show the output on localhost:3000

