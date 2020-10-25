function foo(args) {
    args = args.filter(x => x !== "")
    let points = 0
    let field = args
        .shift()
        .split("|")
        .map(x => Number(x))
    const getOutboundIndex = {
        left: (positions, start, field) => {
            let index = start
            while (positions > 0) {
                if (index < 0) index = field.length - 1
                positions -= 1
                index -= 1
            }
            return index
        },
        right: (positions, start, field) => {
            let index = start
            while (positions > 0) {
                if (index >= field.length) index = 0
                positions -= 1
                index += 1
            }
            return index
        },
    }
    const actions = {
        "Shoot Right": shootRight,
        "Shoot Left": shootLeft,
        Reverse: reverse,
        "Game over": gameOver,
    }

    function shoot(target) {
        const pointsGained = field[target] > 5 && field[target] !== 0 ? 5 : field[target]
        field[target] = field[target] > 5 && field[target] !== 0 ? field[target] - 5 : 0
        points += pointsGained
    }

    function shootLeft(index, length) {
        if (field[index] === undefined) return null

        if (length > index + 1) shoot(getOutboundIndex.left(length, index, field))
        else {
            shoot(index - length)
        }
    }

    function shootRight(index, length) {
        if (field[index] === undefined) return null

        if (length + index > field.length - 1) shoot(getOutboundIndex.right(length, index, field))
        else {
            shoot(index + length)
        }
    }

    function reverse() {
        return (field = field.reverse())
    }

    args.forEach(x => {
        x = x.split("@").map(x => (isNaN(x) ? x : Number(x)))
        actions[x[0]](x[1], x[2])
    })

    function gameOver() {
        console.log(field.join(" - "))
        console.log(`Iskren finished the archery tournament with ${points} points!`)
    }
}