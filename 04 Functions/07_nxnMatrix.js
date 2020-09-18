function foo(n) {
    let row = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            row.push(n)
        }
        console.log(row.join(" "))
        row = []
    }
}
