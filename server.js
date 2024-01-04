const express = require('express')
const cors = require('cors');
const app = express()

const port = 3000

app.use(cors())

let a = 10
let b = 10

const add = (a, b) => { //initiate
    return a + b
}

app.get('/', (req, res) => {
    let sum = add(a, b) //call
    let sum1 = add(50, b) //call
    let sum2 = add(100, 500) //call
    let sum3 = add(1000000, 250) //call
    res.send({ sum: sum, sum1, sum2 })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})