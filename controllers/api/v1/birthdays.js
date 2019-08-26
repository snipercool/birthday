const Birthday = require("../../../models/birthdays");

const create = (req, res) =>{
    let birthday = new Birthday();
    birthday.text = req.body.text;
    birthday.user = req.body.user;
    birthday.completed = req.body.completed;
    birthday.save((err,doc)=>{
        if (err) {
            res.json({
                "status": "error",
                "text": "Something went wrong."
            }); 
        }
        if(!err){
            res.json({
                "status": "succes",
                "data":{
                    "birtday": doc
                }
            });   
        }
    }) 
}
const getAll = (req, res) =>{
    Birthday.find({"user": "Nicolas"}, (err, docs) =>{
        if(!err){
            res.json({
                "status": "succes",
                "data":{
                    "birthdays": docs
                }
            });
        }
    })
}

module.exports.getAll = getAll;
module.exports.create = create;