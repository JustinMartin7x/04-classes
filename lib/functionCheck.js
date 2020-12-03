const filterOut = (item) => {
    return item.split("")
        .filter(item => item === '{' || item === '}' || item === '(' || item === ')' || item === '[' || item === ']')
}

const functionCheck = (func) => {
    str = filterOut(func)
    console.log(str)
    let stack = [];
    let char = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        } else {
            let prevChar = stack.pop();
            if (str[i] !== char[prevChar]) {
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