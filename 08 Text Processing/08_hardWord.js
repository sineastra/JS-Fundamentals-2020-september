function foo(arr) {
    arr[1].forEach(x => {
        let hole = '';
        for (let i = 0; i < x.length; i++) {
            hole += '_'
        }
        let expr = `\\b${hole}\\b`
        let regx = new RegExp(expr, 'm')
        arr[0] = arr[0].replace(regx, x)
    })

    return arr[0]
}