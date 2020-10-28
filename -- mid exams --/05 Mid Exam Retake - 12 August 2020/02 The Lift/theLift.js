function foo(arr) {
    arr = arr.filter(x => x !== "")
    let people = arr.shift()
    const field = arr
        .shift()
        .split(" ")
        .map(x => Number(x))
    let index = 0

    while (index < field.length) {
        while (field[index] < 4) {
            if (people === 0) {
                console.log(`The lift has empty spots!
${field.join(" ")}`)
                return
            }
            field[index] += 1
            people -= 1
        }

        index += 1
    }

    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!
${field.join(" ")}`)
        return
    }

    console.log(field.join(" "))
}

foo(["15", "0 0 0 0 0"])
// foo(["20", "0 2 0"])
