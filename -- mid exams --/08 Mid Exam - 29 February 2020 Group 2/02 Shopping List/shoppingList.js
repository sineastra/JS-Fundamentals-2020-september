function foo(arr) {
    arr = arr.filter(x => x !== "")
    let groceries = arr.shift().split("!")
    const actions = {
        Urgent: urgent,
        Unnecessary: unnecessary,
        Correct: correct,
        Rearrange: rearrange,
        Go: goShopping,
    }

    function getIndex(item) {
        if (groceries.includes(item)) {
            return groceries.findIndex(x => x === item)
        }
    }

    function urgent(item) {
        if (!groceries.includes(item)) {
            groceries.unshift(item)
        }
    }

    function unnecessary(item) {
        if (getIndex(item) !== undefined) {
            groceries.splice(getIndex(item), 1)
        }
    }

    function correct(oldItem, newItem) {
        if (getIndex(oldItem) !== undefined) {
            groceries[getIndex(oldItem)] = newItem
        }
    }

    function rearrange(item) {
        if (getIndex(item) !== undefined) {
            groceries.splice(getIndex(item), 1)
            groceries.push(item)
        }
    }

    function goShopping() {
        console.log(groceries.join(", "))
    }

    for (let i = 0; i < arr.length; i++) {
        const [action, param1, param2] = arr[i].split(" ")
        actions[action](param1, param2)
        if (action === "Go") break
    }
}

// foo([
//     "Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!",
// ])

foo([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!",
])
