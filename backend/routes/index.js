const {Router}  = require("express");
const router = Router();

router.use("/auth", require("./auth.js"));
router.use("/posts", require("./posts.js"));

module.exports = router;