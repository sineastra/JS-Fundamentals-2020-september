function foo(arr) {
    let wotah = Number(arr[1])
    let data = arr[0]
        .split("#")
        .map(x => x.split(" = "))
        .map(x => [x[0], Number(x[1])])
    const ranges = {
        High: n => n >= 81 && n <= 125,
        Medium: n => n >= 51 && n <= 80,
        Low: n => n >= 1 && n <= 50,
    }
    const cells = []
    let effort = 0
    let fire = 0

    for (let i = 0; i < data.length; i++) {
        if (wotah - data[i][1] < 0) continue
        if (!ranges[data[i][0]](data[i][1])) continue
        wotah -= data[i][1]
        effort += data[i][1] * 0.25
        cells.push(data[i][1])
        fire += data[i][1]
    }

    console.log("Cells:")
    cells.forEach(x => console.log(`- ${x}`))
    console.log(`Effort: ${effort.toFixed(2)}`)
    console.log(`Total Fire: ${fire}`)
}