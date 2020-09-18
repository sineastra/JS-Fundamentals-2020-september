function foo(n) {
    let sum = 0
    for (i = 1; i <= n; i += 1) {
        if (n % i === 0) sum += i
    }

    return sum / n === 2 ? `We have a perfect number!` : `It's not so perfect.`
}