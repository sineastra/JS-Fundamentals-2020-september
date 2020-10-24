function foo(arr) {
    let budget = Number(arr[0])
    const kiloFlourPrice = Number(arr[1])
    const packEggsPrice = kiloFlourPrice * 0.75
    const litreMilkPrice = kiloFlourPrice * 1.25
    const milkForOneCozonac = litreMilkPrice / 4
    const pricePerCozonac = kiloFlourPrice + packEggsPrice + milkForOneCozonac
    let cozonacs = 0
    let eggs = 0

    while (budget - pricePerCozonac > 0) {
        budget -= pricePerCozonac
        cozonacs += 1
        eggs += 3
        if (cozonacs % 3 === 0) eggs -= cozonacs - 2
    }

    console.log(`You made ${cozonacs} cozonacs! Now you have ${eggs} eggs and ${budget.toFixed(2)}BGN left.`)
}