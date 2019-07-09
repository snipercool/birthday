const getAll = (req, res) =>{
    res.send("get messages");
}

const create = (req, res) => {
    res.send("get messages")
  }

module.exports.getAll = getAll;
module.exports.create = create;