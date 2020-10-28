function foo(input) {
    let sequence = input.shift().split(" ")
    const commands = input.slice(
        0,
        input.findIndex(x => x === "end")
    )
    let moves = 0

    for (let i = 0; i < commands.length; i++) {
        const [index1, index2] = commands[i].split(" ").map(x => Number(x))
        moves += 1

        if (
            index1 >= sequence.length ||
            index2 >= sequence.length ||
            index1 < 0 ||
            index2 < 0 ||
            sequence.length === 0 ||
            index1 === index2
        ) {
            sequence.splice(sequence.length / 2, 0, `-${moves}a`)
            sequence.splice(sequence.length / 2, 0, `-${moves}a`)
            console.log("Invalid input! Adding additional elements to the board")
        } else if (sequence[index1] === sequence[index2]) {
            const element = sequence[index1]
            sequence = sequence
                .map((x, i) => (i === index1 || i === index2 ? undefined : x))
                .filter(x => x !== undefined)
            console.log(`Congrats! You have found matching elements - ${element}!`)
        } else {
            console.log("Try again!")
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`)
            return
        }
    }

    console.log(`Sorry you lose :(
${sequence.join(" ")}`)
}