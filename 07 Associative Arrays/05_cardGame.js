function foo(arr) {
    let result = []
    const faces = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
    }
    const types = {
        S: 4,
        H: 3,
        D: 2,
        C: 1,
    }

    arr = arr
        .map(x => x.split(": "))
        .reduce((a, v) => {
            a.get(v[0]) === undefined ? a.set(v[0], v[1]) : a.set(v[0], a.get(v[0]) + ", " + v[1])
            return a
        }, new Map())

    arr.forEach((x, y) => {
        x = x.split(", ").filter((x1, i, arr) => !arr.slice(i + 1).some(y => y === x1))
        result.push([y, x])
    })
    result.forEach(x => {
        x[1] = x[1].reduce((a, v) => {
            const [x, y, z] = v.split("")
            z === undefined ? (a += faces[x] * types[y]) : (a += faces[x + y] * types[z])
            return a
        }, 0)
    })

    result.forEach(x => console.log(`${x[0]}: ${x[1]}`))
}
