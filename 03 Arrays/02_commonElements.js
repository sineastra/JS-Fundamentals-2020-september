function foo(arr1, arr2) {
    const items = arr1.filter(x => arr2.includes(x))
    items.forEach(e => {
        console.log(e)
    })
}