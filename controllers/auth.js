const User = require('../models/users');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    let birthdate = req.body.birthdate;
    const user = new User({
        username: username,
        birthdate: birthdate
    });
    await user.setPassword(password);
    console.log("password set");
    await user.save().then(result => {
        let token = jwt.sign({
            uid: result._id,
            username: result.username
        }, "BirthdayToken");
        console.log("token set");
         res.json ({
            "status": "success",
            "data": {
                "token": token
            }
        })
        console.log("user registered");
    }).catch(error =>{
        res.json({
            "status": "error",
            "message": error.message
        })
        console.log("something went wrong");
    });
};

const login = async (req, res, next) =>{
        const user = await User.authenticate()(req.body.username, req.body.password).then(result => {

            if (!result.user) {
                return res.json({
                    "status": "failed",
                    "message": "Login failed"
                })
            }

            let token = jwt.sign({
                uid: result._id,
                username: result.username
            }, "BirthdayToken");
            return res.json({
                "status": "success",
                "data": {
                    "token": token
                }
            });  
        }).catch(error =>{
            res.json({
                "status": "error",
                "message": error.message
            })
        });
};

module.exports.signup = signup;
module.exports.login = login;