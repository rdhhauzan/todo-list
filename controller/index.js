// import { Todo } from '../models/index';
const model = require('../models/index');

async function getArray (req, res) {
    try {
        let data = await model.Todo.findAll()

        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

async function postArray (req, res) {
    const { name, description, status } = req.body
    try {
        await model.Todo.create({
            name: name, 
            description: description,
            status: status
        })

        return res.status(201).json({ message: "Todo created successfully"})
    } catch (error) {
        console.log(error)
    }
}

function deleteArray (req, res) {
    return res.json({ msg: "Deleted" })
}

module.exports = { getArray, postArray, deleteArray }