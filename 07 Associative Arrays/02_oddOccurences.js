function foo(arr) {
    const entries = [
        ...arr
            .split(" ")
            .map(x => x.toLocaleLowerCase())
            .reduce((a, v) => (a.get(v) !== undefined ? a.set(v, a.get(v) + 1) : a.set(v, 1)), new Map())
            .entries(),
    ]
    return entries
        .filter(x => x[1] % 2 !== 0)
        .map(x => x[0])
        .join(" ")
}