function foo(arr) {
    let shopList = arr[0].split(" ")
    const commands = Number(arr[1])
    const actions = {
        Include: item => shopList.push(item),
        Visit: visit,
        Prefer: prefer,
        Place: place,
    }
    function visit(firstLast, numOfShops) {
        numOfShops = Number(numOfShops)
        if (!(numOfShops > shopList.length)) {
            if (firstLast === "first") shopList.splice(0, numOfShops)
            else shopList.splice(-numOfShops)
        }
    }

    function prefer(...args) {
        args = args.map(x => Number(x))
        if (shopList[args[0]] !== undefined && shopList[args[1]] !== undefined) {
            const temp = shopList[args[0]]
            shopList[args[0]] = shopList[args[1]]
            shopList[args[1]] = temp
        }
    }

    function place(shop, index) {
        index = Number(index)
        if (shopList[index + 1] !== undefined) {
            shopList.splice(index + 1, 0, shop)
        }
    }

    for (let i = 2; i < commands + 2; i++) {
        const [action, param1, param2] = arr[i].split(" ")
        actions[action](param1, param2)
    }

    console.log(`Shops left:
${shopList.join(" ")}`)
}