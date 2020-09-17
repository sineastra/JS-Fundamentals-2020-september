function foo(arr) {
    let field = new Array(arr.shift()).fill(0)
    const indexes = arr
        .shift()
        .split(" ")
        .map(x => Number(x))
    indexes.forEach(x => {
        if (field[x] !== undefined) field[x] = 1
    })

    function moveLeft(arr, index) {
        for (let i = index; i >= 0; i -= index) {
            if (arr[i] === 0) {
                arr[i] = 1
                break
            }
        }
        return arr
    }
    function moveRight(arr, index) {
        for (let i = index; i < arr.length; i += index) {
            if (arr[i] === 0) {
                arr[i] = 1
                break
            }
        }
        return arr
    }
    arr.forEach(x => {
        const [startIndex, direction, endIndex] = x.split(" ")
        if (field[Number(startIndex)] !== 0 && field[Number(startIndex)] !== undefined) {
            field[Number(startIndex)] = 0
            direction === "left"
                ? (field = moveLeft(field, Number(startIndex) - Number(endIndex)))
                : (field = moveRight(field, Number(startIndex) + Number(endIndex)))
        }
    })

    return field.join(" ")
}