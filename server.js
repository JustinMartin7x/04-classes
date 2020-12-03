const express = require('express')
const app = express();

app.use(express.json());

app.post('/lint', (req, res) => {
    const greeting = "hello"
    res.send(greeting)
})




app.listen(7890, () => {
    console.log('ya you are up on 7890')
});