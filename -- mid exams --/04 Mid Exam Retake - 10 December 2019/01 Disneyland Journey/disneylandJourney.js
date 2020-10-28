function foo(args) {
    args = args.map(Number)
    let money = 0

    for (let i = 1; i <= args[1]; i++) {
        if (i % 2 !== 0 && i !== 1) {
            money -= money * 0.16
        }
        if (i % 4 === 0) {
            money += money * 0.25
        }
        money += args[0] * 0.25
    }
    return money > args[0]
        ? `Bravo! You can go to Disneyland and you will have ${(money - args[0]).toFixed(2)}lv. for souvenirs.`
        : `Sorry. You need ${(args[0] - money).toFixed(2)}lv. more.`
}

console.log(foo([]))