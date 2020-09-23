function foo(args) {
    let furniture = []
    let prices = []
    let quantities = []
    for (let i = 0; i < args.length; i++) {
        if (args[i].match(/.+[a-zA-Z]+.+[0-9]+\.?[0-9]*!{1}[0-9]+/g)) {
            let numbers = args[i].match(/[0-9]+\.?[0-9]*!{1}[0-9]+/g)[0].split('!')
            furniture.push(args[i].match(/[a-zA-Z]+/g)[0])
            prices.push(Number(numbers[0]))
            quantities.push(Number(numbers[1]))
        }
    }
    prices = prices.map((x, i) => x * quantities[i]).reduce((a, v) => a + v, 0)
    console.log(`Bought furniture: `)
    furniture.forEach(x => console.log(x))
    console.log(`Total money spend: ${prices.toFixed(2)}`)
}