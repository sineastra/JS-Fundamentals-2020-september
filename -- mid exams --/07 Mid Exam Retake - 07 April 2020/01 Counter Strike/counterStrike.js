function foo(arr) {
    const extractIndex = arr.findIndex(x => x === "End of battle")
    arr = arr
        .slice(0, extractIndex !== -1 ? extractIndex : arr.length + 1)
        .map(Number)
    let energy = arr.shift()
    let wonBattles = 0

    for (let i = 0; i < arr.length; i += 1) {
        if (energy - arr[i] < 0) {
            console.log(
                `Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`
            )
            return
        }

        energy -= arr[i]
        wonBattles += 1
        if (wonBattles % 3 === 0) {
            energy += wonBattles
        }
    }

    console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`)
}