let array = []

function getArray (req, res) {
    return res.json(array);
}

function postArray (req, res) {
    const { name, age } = req.body
    array.push({ name: name, age: age })

    return res.json({ msg: "Created" })
}

function deleteArray (req, res) {
    const { index } = req.params

    array.slice(0, index)
    return res.json({ msg: "Deleted" })
}

module.exports = { getArray, postArray, deleteArray }