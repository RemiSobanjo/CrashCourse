//this is the ES6 method of importing modules
//import Express from "express";
//this is the vanilla JS mthod of importing modules
const express = require("express");
require("dotenv").config();
const userRouter = require("./routes/users");


//the app keyword helps us form the entry point of our
//application.
const app = express();
const mongoose = require("mongoose");

//below is another method of calling the 'app' keyword
//using a technique called destructuring
//const {app, fs, path } = express();

const port = process.env.PORT;
const db = process.env.DB_DEVELOPMENT_URL;

app.use(express.urlencoded({extended: true}));
app.use(express.json({}));

require("./startup/routes")(app);

//const db = "mongodb+srv://remifeyi:passWord123@passnow1.a001on2.mongodb.net/passnow1?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);

mongoose
    .connect(db)
    .then(() => console.log("crachcourseDB has been connected successfully......"));

// const newUser = (req, res, next) => {

//     res.send("welcome");
// };

//app.use("/register", newUser);



// app.get("/student", (req, res, next) => {
//     const studentsDetails = {
//         name: "Gabriel Rufai",
//         age: 90,
//         class: 1845,
//         address: "Ibeju Lekki Street Dolphin Estate"
//     }

//     res.send(studentsDetails);
// });


// app.post("/register", (req, res, next) => {
//     // const email = req.body.email;
//     // const password = req.body.password;
//     // const firstName = req.body.firstName;

//     //Destructuring
//     const {firstName, email, password} = req.body;

//     const body = req.body;
//     // console.log(body);

//     res.send({
//         body,
//         message: "User successfully registered"
//     });
// });

// app.put("/update", (req, res, next) => {

//     //const {fullName, age, address} = req.body;
//     const fullName = req.body.fullName;
//     const age = req.body.age;
//     const address = req.body.address;
    
//     const user_details = {
//         email: "remilekun@mail.com",
//         password: "123456789",
//         fullName: fullName,
//         age: age,
//         address: address
//     }

//     res.send({
//         user_details,
//         msg: "User update successful"
//     });
// });

//assignment
// app.patch("/patch", (req, res, next) => {

// });

//assignment
// app.delete("/delete", (req, res, next) => {

// });


app.listen(port, () => {
    console.log("Server is listening on port:" + port);
});





// const dev = (par1, par2) => {
//     //console.log(par1 + par2);

//     return {par1, par2};
// }

// const {par1, par2} = dev(2, 3)
// console.log(par1 + par2);