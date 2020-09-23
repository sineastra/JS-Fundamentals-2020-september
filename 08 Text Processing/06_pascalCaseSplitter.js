function foo(str) {
    str = str.split('');
    let index = 0;
    let words = []
    str.forEach(x => {
        if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) {
            words.push(x)
        } else if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
            words[words.length-1] += x
        }
    })

    console.log(words.join(', '))
}