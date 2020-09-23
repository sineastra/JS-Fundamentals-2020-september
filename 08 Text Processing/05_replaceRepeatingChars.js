function foo(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (newStr.charAt([newStr.length-1]) !== str[i]) newStr += str[i]
    }
    console.log(newStr)
}