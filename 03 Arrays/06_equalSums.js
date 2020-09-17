function foo(arr) {
    let index = "no"
    arr.forEach((_, i) => {
        const leftSum = arr.slice(0, i + 1).reduce((a, v) => a + v, 0)
        const rightSum = arr.slice(i).reduce((a, v) => a + v, 0)
        if (leftSum === rightSum) index = i
    })
    return index
}