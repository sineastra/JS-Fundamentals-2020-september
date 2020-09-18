function foo(arr) {
    let wagons = arr
        .shift()
        .split(" ")
        .map(x => Number(x))
    const maxSeats = Number(arr.shift())

    function addPassengers(n) {
        for (let i = 0; i < wagons.length; i++) {
            if (wagons[i] + n <= maxSeats) {
                wagons[i] += n
                break
            }
        }
    }

    function add(value) {
        wagons.push(value)
    }

    arr.forEach(x => {
        const [command, value] = x.split(" ")
        value ? add(Number(value)) : addPassengers(Number(command))
    })

    return wagons.join(" ")
}
