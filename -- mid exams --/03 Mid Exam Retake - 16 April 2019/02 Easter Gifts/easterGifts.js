function foo(arr) {
    let gifts = arr.shift().split(" ")
    actions = {
        OutOfStock: outOfStick,
        Required: required,
        JustInCase: justInCase,
    }

    function outOfStick(gift) {
        gifts = gifts.map(x => (x === gift ? "None" : x))
    }

    function required(gift, index) {
        if (gifts[index] !== undefined) gifts[index] = gift
    }

    function justInCase(gift) {
        gifts[gifts.length - 1] = gift
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "No Money") break
        const [action, param1, param2] = arr[i].split(" ")
        actions[action](param1, param2)
    }

    gifts = gifts.filter(x => x !== "None")
    console.log(gifts.join(' '))
}