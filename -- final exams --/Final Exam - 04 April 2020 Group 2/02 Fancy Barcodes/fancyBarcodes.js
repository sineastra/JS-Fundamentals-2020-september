function foo(arr) {
    const x = Number(arr.shift())
    const r = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g
    arr = arr.slice(0, x)

    arr.forEach(x => {
        const matches = (x.match(r) || []).filter(x => x !== "")
        if (matches.length > 0) {
            let a = matches[0].split("").filter(x => !isNaN(Number(x)))
            a = a.length > 0 ? a.reduce((a, v) => a + v, "") : null

            console.log(`Product group: ${a === null ? "00" : a}`)
        } else {
            console.log(`Invalid barcode`)
        }
    })
}
