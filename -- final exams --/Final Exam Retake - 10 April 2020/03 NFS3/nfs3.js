function foo(arr) {
    const n = Number(arr.shift())
    let cars = {}
    for (let i = 0; i < n; i++) {
        const [a, b, c] = arr.shift().split("|")
        cars[a] = cars[a] || {}
        cars[a].mileage = Number(b)
        cars[a].fuel = Number(c)
    }
    arr = arr.slice(0, arr.indexOf("Stop"))
    const actions = { Drive: drive, Refuel: refuel, Revert: revert }

    function drive(c, d, f) {
        if (cars[c].fuel < f) {
            console.log("Not enough fuel to make that ride")
            return null
        }

        cars[c].mileage += d
        cars[c].fuel -= f
        console.log(
            `${c} driven for ${d} kilometers. ${f} liters of fuel consumed.`
        )
        if (cars[c].mileage >= 100000) {
            console.log(`Time to sell the ${c}!`)
            delete cars[c]
        }
    }

    function refuel(c, f) {
        if (cars[c].fuel + f > 75) {
            f = 75 - cars[c].fuel
            cars[c].fuel = 75
        } else {
            cars[c].fuel += f
        }

        console.log(`${c} refueled with ${f} liters`)
    }

    function revert(c, k) {
        cars[c].mileage -= k
        if (cars[c].mileage < 10000) {
            cars[c].mileage = 10000
        } else {
            console.log(`${c} mileage decreased by ${k} kilometers`)
        }
    }

    arr.forEach(x => {
        const [command, a, b, c] = x
            .split(" : ")
            .map(x => (isNaN(x) ? x : Number(x)))
        actions[command](a, b, c)
    })

    cars = Object.entries(cars).sort((a, b) => {
        return b[1].mileage - a[1].mileage !== 0
            ? b[1].mileage - a[1].mileage
            : a[0].localeCompare(b[0])
    })

    cars.forEach(x =>
        console.log(
            `${x[0]} -> Mileage: ${x[1].mileage} kms, Fuel in the tank: ${x[1].fuel} lt.`
        )
    )
}
