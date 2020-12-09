function foo(arr) {
    let targets = arr.splice(0, arr.indexOf("Sail"))
    arr.shift()
    arr = arr.slice(0, arr.indexOf("End"))
    targets = targets
        .map(x => x.split("||").map(x => (isNaN(x) ? x : Number(x))))
        .reduce((a, _, i, arr2) => {
            a[arr2[i][0]] = a[arr2[i][0]] || {}
            a[arr2[i][0]].population =
                (a[arr2[i][0]].population || 0) + arr2[i][1]
            a[arr2[i][0]].gold = (a[arr2[i][0]].gold || 0) + arr2[i][2]
            return a
        }, {})
    const actions = {
        Plunder: plunder,
        Prosper: prosper,
    }

    function plunder(t, p, g) {
        targets[t].population -= p
        targets[t].gold -= g
        console.log(`${t} plundered! ${g} gold stolen, ${p} citizens killed.`)

        if (targets[t].population <= 0 || targets[t].gold <= 0) {
            delete targets[t]
            console.log(`${t} has been wiped off the map!`)
        }
    }

    function prosper(t, g) {
        if (g < 0) {
            console.log(`Gold added cannot be a negative number!`)
            return null
        }

        targets[t].gold += g
        console.log(
            `${g} gold added to the city treasury. ${t} now has ${targets[t].gold} gold.`
        )
    }

    arr.forEach(x => {
        const [action, a, b, c] = x
            .split("=>")
            .map(x => (isNaN(x) ? x : Number(x)))

        actions[action](a, b, c)
    })

    targets = Object.entries(targets).sort((a, b) =>
        b[1].gold - a[1].gold === 0
            ? a[0].localeCompare(b[0])
            : b[1].gold - a[1].gold
    )
    if (targets.length > 0) {
        console.log(
            `Ahoy, Captain! There are ${targets.length} wealthy settlements to go to:`
        )
        targets.forEach(x =>
            console.log(
                `${x[0]} -> Population: ${x[1].population} citizens, Gold: ${x[1].gold} kg`
            )
        )
    } else {
        console.log(
            "Ahoy, Captain! All targets have been plundered and destroyed!"
        )
    }
}
