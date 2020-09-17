function foo(arr, n) {
    for (let i = 0; i < n; i++) {
        const item = arr.shift()
        arr.push(item)
    }

    return arr.join(' ')
}