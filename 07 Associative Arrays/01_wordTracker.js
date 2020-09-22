function foo(arr) {
    const words = new Map(
        arr
            .shift()
            .split(" ")
            .map(x => [x, 0])
    )
    arr.forEach(x => {
        if (words.get(x) !== undefined) words.set(x, words.get(x) + 1)
    })
    return [...words.entries()].sort((x, y) => y[1] - x[1]).forEach(x => console.log(`${x[0]} - ${x[1]}`))
}

foo([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurances",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
])
