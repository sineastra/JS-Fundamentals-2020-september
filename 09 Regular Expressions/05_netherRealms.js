function foo(arr) {
    const hpRegex = /[^0-9\+\-\/\*\.]/g
    const splitRegx = /[, ]+/g
    const numbersRegx = /\-*[\d.\d]+/g
    const multipliersMatch = /[\*\/]/g
    const data = arr[0].split(splitRegx);
    const actions = {
        '/': (n) => n / 2,
        '*': (n) => n * 2,
    }
    let result = [];

    data.forEach(name => {
        const hpMatch = name.match(hpRegex) || []
        let damageMatch = name.match(numbersRegx) || []
        const multipliers = name.match(multipliersMatch) || []
        let damage = damageMatch.map(x => Number(x)).reduce((a, v) => a + v, 0)
        const health = hpMatch.map(x => x.charCodeAt(0)).reduce((a, v) => a + v, 0)

        multipliers.forEach(x => damage = actions[x](damage))

        result.push({
            name,
            health,
            damage
        })
    })

    result = result.sort((a, b) => a['name'].localeCompare(b['name']))
    result.forEach(x => console.log(`${x.name} - ${x.health} health, ${x.damage.toFixed(2)} damage`))
}