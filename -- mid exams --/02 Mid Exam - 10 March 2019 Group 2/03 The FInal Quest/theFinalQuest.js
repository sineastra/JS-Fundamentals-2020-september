function foo(arr) {
    arr = arr.filter(x => x !== "")
    let message = arr.shift().split(" ")
    const actions = {
        Delete: deleteWord,
        Swap: swapWords,
        Put: putWord,
        Sort: sortWords,
        Replace: replaceWords,
    }

    function getIndex(e) {
        return message.findIndex(x => x === e)
    }

    function deleteWord(i) {
        if (message[Number(i) + 1] !== undefined) {
            message.splice(Number(i) + 1, 1)
        }
    }

    function swapWords(w1, w2) {
        const firstIndex = getIndex(w1)
        const secondIndex = getIndex(w2)

        if (firstIndex !== -1 && secondIndex !== -1) {
            let temp = message[firstIndex]
            message[firstIndex] = message[secondIndex]
            message[secondIndex] = temp
        }
    }

    function putWord(w, i) {
        if (message[Number(i) - 1] !== undefined || Number(i) - 1 === message.length) {
            if (Number(i) - 1 === message.length) {
                message.push(w)
            } else {
                message.splice(Number(i) - 1, 0, w)
            }
        }
    }

    function sortWords() {
        message = message.sort((a, b) => b.localeCompare(a))
    }

    function replaceWords(w1, w2) {
        const index = getIndex(w2)
        if (index !== -1) {
            message[index] = w1
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Stop") break
        const [action, param1, param2] = arr[i].split(" ")
        actions[action](param1, param2)
    }

    console.log(message.join(" "))
}