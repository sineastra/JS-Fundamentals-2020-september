function foo(arr) {
    let result = arr.reduce((a, v) => {
        const [system, component, subC] = v.split(" | ")
        if (!a.has(system)) {
            a.set(system, new Map())
        }
        if (!a.get(system).has(component)) {
            a.get(system).set(component, [])
        }
        a.get(system).get(component).push(subC)
        return a
    }, new Map())

    result = [...result.entries()].sort((x, y) => {
        return y[1].size - x[1].size !== 0 ? y[1].size - x[1].size : x[0].toLowerCase().localeCompare(y[0].toLowerCase())
    })
    result = result.map(x => [x[0], [...x[1].entries()].sort((x, y) => y[1].length - x[1].length)])
    result.forEach(x => {
        console.log(`${x[0]}`)
        x[1].forEach(x1 => {
            console.log(`|||${x1[0]}`)
            x1[1].forEach(x2 => console.log(`||||||${x2}`))
        })
    })
}
