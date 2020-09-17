function foo(number, type, day) {
    const types = {
        Students: {
            Friday: 8.45,
            Saturday: 9.8,
            Sunday: 10.46,
        },
        Business: {
            Friday: 10.9,
            Saturday: 15.6,
            Sunday: 16,
        },
        Regular: {
            Friday: 15,
            Saturday: 20,
            Sunday: 22.5,
        },
    }

    function display(r) {
        return `Total price: ${r.toFixed(2)}`
    }
    const result = types[type][day] * number
    if (type === "Students" && number >= 30) return display(result - result * 0.15)
    if (type === "Business" && number >= 100) return display(result - 10 * types[type][day])
    if (type === "Regular" && number >= 10 && number <= 20) return display(result - result * 0.05)

    return display(result)
}