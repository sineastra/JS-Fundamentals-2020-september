function foo(arr) {
    return arr.reduce((a, v) => {
        if (!a.includes(v)) a.push(v)
        return a
    }, []).join(' ')
}