function foo(str) {
    str = str.match(/[a-zA-Z]{1}[0-9]+[a-zA-Z]{1}/g)
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    function isUpperCase(l) {
        return l === l.toUpperCase()
    }

    function getPosition(l) {
        return alphabet.indexOf(l.toLowerCase()) + 1
    }

    function getData(str) {
        let data = str.split('')

        return [data.shift(), data.pop(), Number(data.join(''))]
    }

    const actions = {
        divide: (number, number2) => number / number2,
        multiply: (number, number2) => number * number2,
        subtract: (number, number2) => number - number2,
        concat: (number, number2) => number + number2,
    }

    return str.reduce((a, v) => {
        let [first, last, number] = getData(v)
        isUpperCase(first)
            ? number = actions.divide(number, getPosition(first))
            : number = actions.multiply(number, getPosition(first))
        isUpperCase(last)
            ? number = actions.subtract(number, getPosition(last))
            : number = actions.concat(number, getPosition(last))
        return a += number
    }, 0).toFixed(2)
}