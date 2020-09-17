function foo(...args) {
    let finalPrice = 0
    let brokenTimes = 0
    const failedFights = args.shift()

    for (let i = 1; i <= failedFights; i += 1) {
        if (i % 2 === 0) {
            if (i % 3 === 0) {
                brokenTimes += 1
                if (brokenTimes % 2 === 0) {
                    finalPrice += args.reduce((a, v) => a + v)
                } else {
                    finalPrice += args.slice(0, 3).reduce((a, v) => a + v)
                }
            } else {
                finalPrice += args[0]
            }
        } else if (i % 3 === 0) {
            finalPrice += args[1]
        }
    }

    return `Gladiator expenses: ${finalPrice.toFixed(2)} aureus`
}
