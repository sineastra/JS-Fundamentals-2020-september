function foo(x, y) {
    return parseFloat(x.toFixed(y < 15 ? y : 15))
}