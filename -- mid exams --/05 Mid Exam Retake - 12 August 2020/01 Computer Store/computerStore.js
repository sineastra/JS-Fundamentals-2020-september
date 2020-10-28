function foo(arr) {
    const customerIndex = arr.findIndex(x => x === "special" || x === "regular")
    const workableArray = arr.slice(0, customerIndex)
    let taxes = 0
    let priceWithout = 0

    for (let i = 0; i < workableArray.length; i++) {
        if (workableArray[i] < 0) {
            console.log(`Invalid price!`)
            continue
        }
        taxes += workableArray[i] * 0.2
        priceWithout += Number(workableArray[i])
    }

    let totalPrice = priceWithout + taxes

    if (totalPrice === 0) {
        console.log("Invalid order!")
    } else {
        if (arr[customerIndex] === "special") {
            totalPrice *= 0.9
        }

        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${priceWithout.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$`)
    }
}

foo(['special'])
