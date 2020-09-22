function foo(a, b) {
    let words = a.split(", ")
    let sentence = b.split(" ")
    words = words.forEach(
        x => (sentence = sentence.map(y => (y.split("").every(x => x === "*") && y.length === x.length ? x : y)))
    )
    
    return sentence.join(' ')
}
