function foo(arr) {
    arr = arr.map(x => x.split(", "))
    let result = arr.reduce((a, v) => {
        if (v[0] === "IN" && !a.includes(v[1])) a.push(v[1])
        else if (v[0] === 'OUT' && a.includes(v[1])) {
            a.splice(
                a.findIndex(x => x === v[1]),
                1
            )
        }
        return a
    }, [])

    result.length === 0 ? console.log("Parking Lot is Empty") : console.log(result.sort().join("\n"))
}
