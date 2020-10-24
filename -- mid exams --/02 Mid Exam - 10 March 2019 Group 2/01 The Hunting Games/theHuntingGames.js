function foo(arr) {
    const days = arr.shift()
    const players = arr.shift()
    let energy = arr.shift()
    const wPerDay = arr.shift()
    const fPerDay = arr.shift()
    let wotah = players * days * wPerDay
    let food = players * days * fPerDay

    arr = arr.map(x => Number(x))
    for (let i = 0; i < arr.length; i++) {
        energy -= arr[i]
        if (energy <= 0) break
        if ((i + 1) % 2 === 0) {
            energy *= 1.05
            wotah -= wotah * 0.3
        }
        if ((i + 1) % 3 === 0) {
            food -= food / players
            energy *= 1.1
        }
    }

    return energy > 0
        ? `You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`
        : `You will run out of energy. You will be left with ${food.toFixed(2)} food and ${wotah.toFixed(
              2
          )} water.`
}
