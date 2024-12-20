const express = require('express');
const router = express.Router();
const controller = require('../controller/index')

router.get('/test', controller.getArray)
router.post('/test', controller.postArray)

router.put('/test', function (req, res) {
    return res.json({ msg: "PUT test message"});
})

router.delete('/test/:index', controller.deleteArray)

module.exports = router;