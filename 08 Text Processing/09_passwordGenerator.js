function foo(arr) {
    const vowelCodes = [65, 69, 73, 79, 85, 97, 101, 105, 111, 117]
    let concatStr = arr[0] + arr[1];
    let index = -1;
    const replacer = arr[2].split('')
    concatStr = concatStr.split('').map(x => {
        if (vowelCodes.includes(x.charCodeAt(0))) {
            index += 1;
            if (index >= replacer.length) index = 0
            return replacer[index].toUpperCase()
        }
        return x
    })

    return `Your generated password is ${concatStr.reverse().join('')}`
}