function foo(data) {
    let result = {}
    data.forEach(x => {
        const parsed = JSON.parse(x)
        const key = Object.keys(parsed)[0]
        const value = Object.values(parsed)[0]
        result[key] = value
    })

    Object.entries(result).sort((x,y) => x[0].localeCompare(y[0])).forEach(x => console.log(`Term: ${x[0]} => Definition: ${x[1]}`))
}