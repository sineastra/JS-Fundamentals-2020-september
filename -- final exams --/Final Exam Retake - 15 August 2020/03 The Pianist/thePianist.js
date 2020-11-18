function foo(arr) {
    arr = arr.slice(0, arr.indexOf("Stop"))
    let pieces = []
    const initialPieces = Number(arr.shift())
    const actions = { Add: add, Remove: remove, ChangeKey: changeKey }

    for (let i = 0; i < initialPieces; i += 1) {
        pieces.push(arr.shift().split("|"))
    }

    function getIndex(a) {
        return pieces.findIndex(x => x[0] === a)
    }

    function add(a, b, c) {
        if (pieces.every(x => x[0] !== a)) {
            pieces.push([a, b, c])
            console.log(`${a} by ${b} in ${c} added to the collection!`)
            return
        }
        console.log(`${a} is already in the collection!`)
    }

    function remove(a) {
        if (getIndex(a) !== -1) {
            pieces.splice([getIndex(a)], 1)
            console.log(`Successfully removed ${a}!`)
            return
        }
        console.log(`Invalid operation! ${a} does not exist in the collection.`)
    }

    function changeKey(a, b) {
        if (getIndex(a) !== -1) {
            pieces[getIndex(a)][2] = b
            console.log(`Changed the key of ${a} to ${b}!`)
            return
        }
        console.log(`Invalid operation! ${a} does not exist in the collection.`)
    }

    arr.forEach(x => {
        const [command, a, b, c] = x.split("|")
        actions[command](a, b, c)
    })
    pieces = pieces
        .sort((a, b) =>
            a[0].localeCompare(b[0]) !== 0
                ? a[0].localeCompare(b[0])
                : a[1].localeCompare(b[1])
        )
        .forEach(x => console.log(`${x[0]} -> Composer: ${x[1]}, Key: ${x[2]}`))
}