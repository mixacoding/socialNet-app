const getAll = async (req, res) => {
    console.log("Get all post",req.locals);
    res.send("Svi postovi")
}


module.exports = getAll