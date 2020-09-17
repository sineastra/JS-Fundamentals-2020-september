function foo(n) {
    return n
        .toString()
        .split("")
        .map(x => Number(x))
        .reduce((a, v) => a + v)
}