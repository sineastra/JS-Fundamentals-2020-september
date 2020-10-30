function foo(arr) {
    arr = arr.map(Number)
    const capacity = arr[0] + arr[1] + arr[2]
    let unanswered = arr[3]
    let hours = 0

    for (let i = 1; i < Infinity; i += 1) {
        if (i % 4 !== 0) {
            unanswered -= capacity
        }

        hours += 1
        if (unanswered <= 0) break
    }

    console.log(`Time needed: ${arr[3] === 0 ? 0 : hours}h.`)
}
