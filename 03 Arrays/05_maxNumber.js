function foo(arr) {
    return arr.filter((x, i) => arr.slice(i + 1).every(y => x > y)).join(' ')
}
