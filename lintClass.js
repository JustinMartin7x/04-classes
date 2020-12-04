class Stack {
    #stack;
    constructor() {
        this.#stack = []
    }
    push(item) {
        this.#stack.push(item)
    }
    pop() {
        return this.#stack.pop()
    }
    peek() {
        this.#stack.peek()
    }
}
module.exports = {
    Stack
}



