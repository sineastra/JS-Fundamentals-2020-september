function foo(arr) {
    const copy = arr.slice()
    function sumArray(arr) {
        return arr.reduce((a, v) => a + v)
    }
    arr = arr.map((x, i) => (x % 2 === 0 ? x + i : x - i))

    return `[ ${arr.join(', ')} ]
${sumArray(copy)}
${sumArray(arr)}`
}