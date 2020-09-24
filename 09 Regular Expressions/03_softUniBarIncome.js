function foo(arr) {
    let data = {
        names: [],
        products: [],
        quantities: [],
        prices: [],
    }
    let totalIncome = 0
    const regex = {
        name: new RegExp(/%[A-Z]{1}[a-z]+%/, 'g'),
        product: new RegExp(/<\w+>/, 'g'),
        quantity: new RegExp(/\|[0-9]+\|/, 'g'),
        price: new RegExp(/[0-9]+\.*[0-9]+\$/, 'g'),
    }

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === 'end of shift') break;
        if (arr[i].match(regex.name) && arr[i].match(regex.product) && arr[i].match(regex.quantity) && arr[i].match(regex.price)) {
            data.names.push(arr[i].match(regex.name)[0].split('%')[1])
            data.products.push(arr[i].match(regex.product)[0].split('<')[1].split('>')[0])
            data.quantities.push(Number(arr[i].match(regex.quantity)[0].split('|')[1]))
            data.prices.push(Number(arr[i].match(regex.price)[0].split('$')[0]))
        } 
    }

    for (let i = 0; i < data.names.length; i++) {
        totalIncome += data.quantities[i] * data.prices[i]
        console.log(`${data.names[i]}: ${data.products[i]} - ${(data.quantities[i] * data.prices[i]).toFixed(2)}`)
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}