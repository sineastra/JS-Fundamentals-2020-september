function foo(arr) {
    let longestSequences = []
    arr.reduce((a, v) => {
        a.push(v)
        if (a.every(x => x === v)) {
            if (a.length > longestSequences.length) longestSequences = a.slice()
            return a
        } else {
            return [v]
        }
    }, [])

    return longestSequences.join(' ')
}