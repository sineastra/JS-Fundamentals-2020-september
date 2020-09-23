function foo(str) {
    str = str.split('');
    let words = []
    str.forEach(x => {
        if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) {
            words.push(x)
        } else if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
            words[words.length - 1] += x
        }
    })

    return words.join(', ')
}