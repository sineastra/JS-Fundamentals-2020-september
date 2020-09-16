function foo(n) {
    let division = false
    const divisions = [2, 3, 6, 7, 10]

    divisions.forEach(x => {
        if (n % x === 0) division = x
    })

    return division ? `The number is divisible by ${division}` : `Not divisible`
}
