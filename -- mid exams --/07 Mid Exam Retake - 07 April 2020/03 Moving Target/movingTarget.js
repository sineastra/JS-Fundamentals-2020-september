function foo(arr) {
    arr = arr.filter(x => x !== "")
    let targets = arr.shift().split(" ").map(Number)
    const actions = {
        Shoot: shoot,
        Add: add,
        Strike: strike,
        End: end,
    }

    function shoot(i, p) {
        if (targets[i] !== undefined) {
            targets[i] -= p
            if (targets[i] <= 0) {
                targets.splice(i, 1)
            }
        }
    }

    function add(i, v) {
        if (targets[i] !== undefined) {
            targets.splice(i, 0, v)
        } else {
            console.log(`Invalid placement!`)
        }
    }

    function strike(i, r) {
        if (targets[i + r] !== undefined && targets[i - r] !== undefined) {
            targets.splice(i - r, r * 2 + 1)
        } else {
            console.log(`Strike missed!`)
        }
    }

    function end() {
        console.log(targets.join("|"))
    }

    arr.forEach(x => {
        const [command, a, b] = x
            .split(" ")
            .map(x => (isNaN(x) ? x : Number(x)))
        actions[command](a, b)
    })
}
