const {Router}  = require("express");
const router = Router();

//http://localhost:4000/api
router.post("/login", require("../controllers/auth/login.js"));
router.post("/register", require("../controllers/auth/register.js"));


module.exports = router;