const express = require("express")
const router = express.Router();

// const models = require("")

router.get('/shows', (req,res) => {
    return res.send("We made itttttccccccccccccccc")
});

module.exports = router;