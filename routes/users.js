const express = require("express");
const userModel = require("../models/users");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async(req, res, next) => {
    const { email, password } = req.body;
    // const email =  req.body.email;
    // const password = req.body.password;

    if(!email || email === " "){
        return res.status(400).json({
            msg: "Email is required"
        });
    }

    if(!password || password === " "){
        return res.status(400).json({
            msg: "Password is required"
        });
    }

    if(password.length < 5 ){
        return res.status(400).json({
            msg: "Password cannot be less than 5 characters."
        });
    }

    if(email.length < 10){
        return res.status(400).json({
            msg: "Email cannot be less than 10 characters."
        });
    }

    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const saveUser = await userModel.create({
        email: email,
        password: hashedPassword
    });

    res.status(201).json({
        msg: "Account created successfully",
        userDetails: saveUser
    });
});

router.post("/login", async(req, res, next) => {
    // res.status(200).json("Welcome Feyi");

    // const userExist = await userModel.find({});

    // if(!userExist){
    //     return res.status(400).json({
    //         msg: "Email not found"
    //     })
    // }

    // res.status(200).json({
    //     msg: "User login successful",
    //     feedback: userExist
    // });

    const {email, password} = req.body;
    const userExist = await userModel.findOne({email : email});
    
    if(!userExist){
        return res.status(400).json({
            msg: "Email not found"
        });
    }

    if(!password){
        return res.status(400).json({
            msg: "Please enter your password"
        })
    }

    const decryptPassword = await bcrypt.compare(password, userExist.password);

    if(!decryptPassword){
        return res.status(400).json({
            msg: "Password is incorrect"
        })
    }

    res.status(201).json({
        msg: "Welcome to PORA Academy",
        userDetails: userExist
    })

});

router.get("/", async(req, res, next) => {
    const { email } = req.body;
    const userExist =  await userModel.findOne({email: email});
    
    // const userExist =  await userModel.find({});

    res.status(200).json({
        data:userExist
    });
});

module.exports = router