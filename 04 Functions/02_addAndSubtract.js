function foo(...args) {
    const last = args.pop()
    function add() {
        return args.reduce((a, v) => a + v)
    }

    function subtract() {
        return add() - last
    }

    return subtract()
}