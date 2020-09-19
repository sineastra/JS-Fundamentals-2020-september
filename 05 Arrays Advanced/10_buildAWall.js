function foo(arr) {
    let days = []
    let index = 0
    arr = arr.map(x => Number(x))

    while (arr.some(x => x !== 30)) {
        arr = arr.map(x => {
            if (x < 30) {
                x += 1
                days[index] = (days[index] || 0) + 195
            }
            return x
        })
        index += 1
    }

    console.log(`${days.join(", ")}
${days.reduce((a, v) => a + v) * 1900} pesos`)
}
