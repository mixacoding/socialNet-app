const {Router}  = require("express");
const verifyToken = require("../middleware/verifyToken.js");
const router = Router();


router.post("/", verifyToken, require("../controllers/posts/getAll.js"));



module.exports = router;