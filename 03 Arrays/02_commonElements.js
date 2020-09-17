function foo(arr1, arr2) {
    const items = arr1.filter(x => arr2.includes(x))
    items.forEach(e => {
        console.log(e)
    })
}

console.log(foo(["Hey", "hello", 2, 4, "Peter", "e"], ["Petar", 10, "hey", 4, "hello", "2"]))
