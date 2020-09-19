function foo(arr) {
    const obj = arr.reduce((a, v) => {
        a[v] = v.length
        return a
    }, {})

    Object.entries(obj).forEach(x => console.log(`Name: ${x[0]} -- Personal Number: ${x[1]}`))
}