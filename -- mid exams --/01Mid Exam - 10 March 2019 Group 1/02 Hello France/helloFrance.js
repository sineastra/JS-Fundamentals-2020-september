function foo(arr) {
    const buyingRange = {
        Clothes: 50.0,
        Shoes: 35.0,
        Accessories: 20.5,
    }
    let boughtItems = []
    let profit = 0
    const items = arr
        .shift()
        .split("|")
        .map(x => x.split("->"))
        .map(y => [y[0], Number(y[1])])
    let budget = Number(arr[0])

    for (let i = 0; i < items.length; i++) {
        if (items[i][1] > buyingRange[items[i][0]]) continue
        if (budget - items[i][1] < 0) continue
        budget -= items[i][1]
        boughtItems.push(items[i][1] * 1.4)
        profit += items[i][1] * 1.4 - items[i][1]
    }

    console.log(boughtItems.map(x => x.toFixed(2)).join(" "))
    console.log(`Profit: ${profit.toFixed(2)}`)
    profit + Number(arr[0]) >= 150 ? console.log("Hello, France!") : console.log(`Time to go.`)
}
