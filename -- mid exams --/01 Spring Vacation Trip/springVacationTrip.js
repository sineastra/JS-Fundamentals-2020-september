function foo(arr) {
    arr = arr.map(x => Number(x))
    const days = arr.shift()
    const budget = arr.shift()
    const people = arr.shift()
    const fuelPerKmPrice = arr.shift()
    const foodPerPerson = arr.shift()
    const roomPerPerson = arr.shift()
    let hotelDiscount = 1
    let expenses = 0

    function exceed(budget, expense) {
        return expense > budget
    }

    if (people > 10) hotelDiscount = 0.75

    expenses += foodPerPerson * people * days + roomPerPerson * people * days * hotelDiscount
    for (let i = 0; i < days; i++) {
        expenses += arr[i] * fuelPerKmPrice
        if (exceed(budget, expenses))
            return `Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`
        if ((i + 1) % 3 === 0 || ((i + 1) % 5 === 0 && (i + 1) % 7 !== 0)) {
            expenses += expenses * 0.4
            if (exceed(budget, expenses))
                return `Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`
        }
        if ((i + 1) % 7 === 0) {
            expenses -= expenses / people
        }
    }

    return `You have reached the destination. You have ${(budget - expenses).toFixed(2)}$ budget left.`
}