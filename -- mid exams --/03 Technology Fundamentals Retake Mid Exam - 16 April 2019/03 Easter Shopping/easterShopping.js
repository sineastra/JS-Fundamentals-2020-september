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
        if (!(Number(numOfShops) > shopList.length)) {
            if (firstLast === "first") shopList.splice(0, Number(numOfShops))
            else shopList.splice(-Number(numOfShops))
        }
    }

    function prefer(n1, n2) {
        if (shopList[Number(n1)] !== undefined && shopList[Number(n2)] !== undefined) {
            const temp = shopList[Number(n1)]
            shopList[Number(n1)] = shopList[Number(n2)]
            shopList[Number(n2)] = temp
        }
    }

    function place(shop, index) {
        if (shopList[Number(index) + 1] !== undefined) {
            shopList.splice(Number(index) + 1, 0, shop)
        }
    }

    for (let i = 2; i < commands + 2; i++) {
        const [action, param1, param2] = arr[i].split(" ")
        actions[action](param1, param2)
    }

    console.log(`Shops left:
${shopList.join(" ")}`)
}