function foo(arr) {
    let stops = arr.shift()
    arr = arr.slice(0, arr.indexOf("Travel"))
    const actions = {
        "Add Stop": addStop,
        "Remove Stop": removeStop,
        Switch: switchIt,
    }
    function addStop(i, s) {
        if (stops[i] !== undefined) {
            stops = stops.substring(0, i) + s + stops.substring(i)
        }
    }

    function removeStop(x, y) {
        if (stops[x] !== undefined && stops[y] !== undefined) {
            stops = stops.slice(0, x) + stops.slice(y + 1)
        }
    }

    function switchIt(a, b) {
        if (stops.indexOf(a) !== -1) {
            b = b.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            const regx = new RegExp(a, "g")
            stops = stops.replace(regx, b)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const [action, x, y] = arr[i]
            .split(":")
            .map(x => (isNaN(x) ? x : Number(x)))
        actions[action](x, y)
        console.log(stops)
    }
    
    console.log(`Ready for world tour! Planned stops: ${stops}`)
}