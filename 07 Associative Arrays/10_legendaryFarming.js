function foo(arr) {
    let key = {
        shards: 0,
        motes: 0,
        fragments: 0,
    }
    const legendaries = {
        shards: "Shadowmourne",
        fragments: "Valanyr",
        motes: "Dragonwrath",
    }
    let junk = {}
    let winner = undefined
    arr =  arr.split(' ').map(x => x.toLowerCase())
    for (let i = 0; i < arr.length; i+=2) {
        if (key[arr[i+1]] !== undefined) {
            key[arr[i+1]] += Number(arr[i])
            if (key[arr[i+1]] >= 250) {
                winner = legendaries[arr[i+1]]
                key[arr[i+1]] = key[arr[i+1]] - 250
                break
            }
        } else {
            junk[arr[i+1]] = (junk[arr[i+1]] === undefined ? 0 : Number(junk[arr[i+1]])) + Number(arr[i])
        }
    }

    key = Object.entries(key).sort((x, y) => (y[1] - x[1] !== 0 ? y[1] - x[1] : x[0].localeCompare(y[0])))
    junk = Object.entries(junk).sort((x, y) => x[0].localeCompare(y[0]))

    console.log(`${winner} obtained!`)
    key.forEach(x => console.log(`${x[0]}: ${x[1]}`))
    if (Object.keys(junk).length > 0) junk.forEach(x => console.log(`${x[0]}: ${x[1]}`))
}
