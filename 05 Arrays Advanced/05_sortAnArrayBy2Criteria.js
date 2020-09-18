function foo(arr) {
    return arr
        .sort((x, y) => {
            return x.length - y.length !== 0
                ? x.length - y.length
                : x.toLocaleLowerCase().localeCompare(y.toLocaleLowerCase())
        })
        .forEach(x => console.log(x))
}