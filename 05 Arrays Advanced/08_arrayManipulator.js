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

// function arrayManipulator(array = [], commands = []) {
//     let result = array.slice(0)
//     let output = []
//     for (let i = 0; i < commands.length; i++) {
//         let command = commands[i].split(" ")
//         if (command[0] === "add") {
//             let index = +command[1]
//             let element = +command[2]
//             result.splice(index, 0, element)
//         }
//         if (command[0] === "addMany") {
//             let index = command[1]
//             let newArray = command.slice(2).map(Number)
//             result.splice(index, 0, ...newArray)
//         }
//         if (command[0] === "contains") {
//             let element = +command[1]
//             let index = result.indexOf(element)
//             console.log(index)
//         }
//         if (command[0] === "remove") {
//             let index = +command[1]
//             result.splice(index, 1)
//         }
//         if (command[0] === "shift") {
//             let rotations = +command[1]
//             for (let j = 0; j < rotations; j++) {
//                 let element = result.shift()
//                 result.push(element)
//             }
//         }
//         if (command[0] === "sumPairs") {
//             if (result.length % 2 === 0) {
//                 for (let k = 0; k < result.length; k += 2) {
//                     output.push(result[k] + result[k + 1])
//                 }
//             } else {
//                 for (let k = 0; k < result.length - 1; k += 2) {
//                     output.push(result[k] + result[k + 1])
//                 }
//                 output.push(result.pop())
//             }
//             result = output
//             output = []
//         }
//         if (command[0] === "print") {
//             console.log("[ " + result.join(", ") + " ]")
//         }
//     }
// }

foo([1, 2, 3, 4, 5], ["shift 1", "print", "shift 2", "print"])
