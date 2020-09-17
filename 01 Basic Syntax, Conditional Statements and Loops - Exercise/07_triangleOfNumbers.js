function foo(n) {
    function displayItem(n) {
        let sequence = []
        for (let i = 1; i <= n; i++) {
            sequence.push(n)
        }

        return sequence.join(" ")
    }

    for (let i = 1; i <= n; i++) {
        console.log(displayItem(i))
    }
}