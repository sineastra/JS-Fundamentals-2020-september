function foo(...args) {
    let result = []
    const start = args[0].charCodeAt(0)
    const end = args[1].charCodeAt(0)

    function display(start, end) {
        for (let i = start + 1; i < end; i++) {
            result.push(String.fromCharCode(i))
        }
    }

    start < end ? display(start, end) : display(end, start)

    console.log(result.join(" "))
}