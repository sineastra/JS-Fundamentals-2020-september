function foo(arr) {
    let targets = arr.shift().split(" ").map(Number)
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "End") break
        const index = arr[i]

        if (targets[index] !== -1 && targets[index] !== undefined) {
            const value = targets[index]
            targets[index] = -1
            targets = targets.map(x => {
                if (x === -1) return x
                if (x > value) {
                    return x - value
                } else {
                    return x + value
                }
            })

            count += 1
        }
    }

    console.log(`Shot targets: ${count} -> ${targets.join(" ")}`)
}
