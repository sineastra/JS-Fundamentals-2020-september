function foo(arr) {
    let spiceSource = Number(arr.shift())
    let spiceStored = 0
    let days = 0

    let payWorkers = s => (s - 26 < 0 ? 0 : s - 26)

    for (;;) {
        if (spiceSource < 100) {
            spiceStored = payWorkers(spiceStored)
            console.log(days)
            console.log(spiceStored)
            break
        }
        spiceStored += spiceSource
        spiceStored = payWorkers(spiceStored)
        spiceSource -= 10
        days += 1
    }
}
