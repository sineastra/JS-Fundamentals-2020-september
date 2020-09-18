function foo(arr) {
    let going = []
    arr.forEach(x => {
        const data = x.split(" ")
        if (data.length === 3) {
            going.includes(data[0]) ? console.log(`${data[0]} is already in the list!`) : going.push(data[0])
        } else {
            going.includes(data[0])
                ? (going = going.filter(x => x !== data[0]))
                : console.log(`${data[0]} is not in the list!`)
        }
    })

    going.forEach(x => console.log(x))
}