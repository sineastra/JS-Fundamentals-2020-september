function foo(arr) {
    let day = 1
    const prices = {
        bitcoin: 11949.16,
        gold: 67.51,
    }
    const stats = {
        gold: 0,
        firstDay: 0,
        boughtFirst: false,
    }
    arr.forEach((e, i) => {
        if (day === 3) {
            stats.gold += e - e * 0.3
            day = 0
        } else {
            stats.gold += e
        }

        if (stats.gold * prices.gold >= prices.bitcoin && stats.boughtFirst === false) {
            stats.firstDay = i + 1
            stats.boughtFirst = true
        }
        day += 1
    })

    const earnedMoney = stats.gold * prices.gold
    return `Bought bitcoins: ${Math.floor(earnedMoney / prices.bitcoin)} ${
        stats.boughtFirst === true ? `\nDay of the first purchased bitcoin: ${stats.firstDay}` : ""
    }
Left money: ${(earnedMoney % prices.bitcoin).toFixed(2)} lv.`
}