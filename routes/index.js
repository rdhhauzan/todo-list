const express = require('express');
const router = express.Router();
const controller = require('../controller/index')

router.get('/todos', controller.getArray)
router.post('/todo', controller.postArray)

router.put('/todo:/id', function (req, res) {
    return res.json({ msg: "PUT test message"});
})

router.delete('/test/:id', controller.deleteArray)

module.exports = router;