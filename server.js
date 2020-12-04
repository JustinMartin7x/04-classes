const express = require('express')
const app = express();
const { Stack } = require('./lintClass.js')

app.use(express.json());

const funcStr = (str) => {
    return str.match(/\(|\)|\{|\}|\[|\]/g)
}

app.post('/lint', (req, res) => {
    const brackets = funcStr(req.body.code)
    const stack = new Stack()
    const openers = ['(', '[', '{']
    const closers = {
        '(': ')',
        '[': ']',
        '{': '}',
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (let i = 0; i < brackets.length; i++) {
        if (openers.includes(brackets[i])) {
            stack.push(brackets[i])
        } else {
            let last = stack.pop()
            if (brackets[i] !== closers[last]) {
            } res.send({
                "error": `missing ${closers[last]}`
            })
        }
        if (stack.length !== 0) {
            const missing = closers.stack[0]
            res.send({
                "fail": `you are missing ${missing} `
            })
        }
        res.send({
            "success": true
        })
    }
})




app.listen(7890, () => {
    console.log('ya you are up on 7890')
});