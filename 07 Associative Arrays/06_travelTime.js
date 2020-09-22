function foo(arr) {
    let data = {}
    arr.forEach(x => {
        const [country, town, price] = x.split(" > ")
        if (data[country] === undefined) data[country] = {}
        if (data[country][town] === undefined) data[country][town] = Number(price)
        if (data[country][town] > Number(price)) data[country][town] = Number(price)
    })

    arr = Object.entries(data).sort((x, y) => x[0].localeCompare(y[0]))
    arr = arr.map(x => [x[0], Object.entries(x[1]).sort((x, y) => x[1] - y[1])])
    arr.forEach(x => {
        console.log(`${x[0]} -> ${x[1].reduce((a, v) => (a += `${v[0]} -> ${v[1]} `), "").trim()}`)
    })
}