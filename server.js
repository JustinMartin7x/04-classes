const express = require('express')
const app = express();
const { linter } = require('./functions.js')


app.use(express.json());

app.post('/lint', (req, res) => {
    const results = linter(req.body.code)

    res.send(results)
})




app.listen(7890, () => {
    console.log('ya you are up on 7890')
});