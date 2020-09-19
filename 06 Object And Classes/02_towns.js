function foo(arr) {
    let objects = []
    arr.forEach(x => {
        const [town, latitude, longitude] = x.split(" | ")
        objects.push({
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        })
    })

    objects.forEach(x => console.log(x))
}