function foo(arr) {
    let paintings = arr.shift().split(" ")
    const actions = {
        Change: changeNumber,
        Hide: hidePaiting,
        Switch: switchPaitings,
        Insert: insertPaiting,
        Reverse: reverse,
    }

    function getIndex(oldNumber) {
        return paintings.findIndex(x => x === oldNumber)
    }

    function changeNumber(oldNumber, newNumber) {
        const index = getIndex(oldNumber)
        if (index !== -1) paintings[index] = newNumber

        return newNumber
    }

    function hidePaiting(num) {
        const index = getIndex(num)
        if (index !== -1) paintings.splice(index, 1)
    }

    function switchPaitings(n1, n2) {
        const firstIndex = getIndex(n1)
        const secondIndex = getIndex(n2)

        if (firstIndex !== -1 && secondIndex !== -1) {
            const temp = paintings[firstIndex]
            paintings[firstIndex] = paintings[secondIndex]
            paintings[secondIndex] = temp
        }
    }

    function insertPaiting(index, number) {
        if (paintings[Number(index) + 1] !== undefined) {
            paintings.splice(Number(index) + 1, 0, number)
        }
    }

    function reverse() {
        paintings = paintings.reverse()
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "END") break
        const [action, param1, param2] = arr[i].split(" ")
        actions[action](param1, param2)
    }

    return paintings.join(" ")
}