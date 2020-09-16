function foo(v1, v2) {
    let sum = 0
    let numbers = []
    for (let i = v1; i <= v2; i++) {
        numbers.push(i)
        sum += i
    }
    return `${numbers.join(' ')}
Sum: ${sum}`
}