const { Stack } = require('./lintClass');
const openers = ['(', '[', '{'];
let matchBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
    ')': '(',
    ']': '[',
    '}': '{',
}
const strip = (code) => {

    return code.match(/\(|\)|\{|\}|\[|\]/g)
}
const isMatching = arr => {

    const stack = new Stack();
    let result = true;

    arr.map(bracket => {

        const peek = stack.peek();

        if (openers.includes(bracket)) {
            stack.push(bracket)
        } else {
            if (matchBrackets[bracket] === peek) {
                stack.pop();
            } else {
                result = {
                    'missing': matchBrackets[peek || bracket]
                }
            }
        }
        if (stack.length) {
            result = {
                'missing': matchBrackets[peek || bracket]
            }
        }
    })
    const remainder = stack.peek()
    if (remainder) {
        result = {
            'missing': matchBrackets[remainder]
        }
    }

    return result;
}
const linter = code => {

    const bracketArr = strip(code);
    console.log(bracketArr);

    const result = isMatching(bracketArr)

    if (result === true) {
        return {
            'success': true
        }
    } else {
        return {
            'error': `missing  ${result.missing}`
        }
    }
}
const code = "const add = (a, b) => { return a + b }};"
console.log(linter(code));
module.exports = {
    linter
}