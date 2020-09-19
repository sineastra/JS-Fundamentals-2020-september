function foo(arr, commands) {
    const actions = {
        add: (i, e) => add(i, e),
        addMany: (i, e) => add(i, e),
        contains: i => contains(i),
        shift: p => shift(p),
        remove: i => remove(i),
        sumPairs: sumPairs,
        print: print,
    }
    let printed = false

    function add(i, e) {
        arr.splice(Number(i), 0, ...e.map(x => Number(x)))
    }

    function contains(e) {
        console.log(arr.findIndex(x => x === Number(e)))
    }

    function remove(i) {
        arr.splice(i, 1)
    }

    function shift(p) {
        for (let j = 0; j < p; j++) {
            let element = arr.shift()
            arr.push(element)
        }
    }

    function sumPairs() {
        let result = []
        for (let i = 0; i < arr.length; i += 2) {
            result.push(arr[i + 1] ? arr[i] + arr[i + 1] : arr[i])
        }
        arr = result
    }

    function print() {
        printed = true
        if (arr.length > 0) {
            console.log(`[ ${arr.join(", ")} ]`)
        } else {
            console.log(`[]`)
        }
    }

    commands.forEach(x => {
        if (!printed) {
            const [action, param1, ...param2] = x.split(" ")
            actions[action](Number(param1), param2)
        }
    })
}