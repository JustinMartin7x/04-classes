
const functionCheck = (func) => {
    str = func.split("")
        .filter(item => item === '{' || item === '}' || item === '(' || item === ')' || item === '[' || item === ']')
    console.log(str)

    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        } else {
            let last = stack.pop();
            if (str[i] !== map[last]) {
                return false
            }
        }
    }
    if (stack.length !== 0) {
        return false
    }
    return true

}

const func = '{hello}}'
console.log(functionCheck(func))


module.exports = {
    functionCheck
}