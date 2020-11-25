function foo(arr) {
    arr = arr.slice(0, arr.indexOf("Reveal"))
    let msg = arr.shift()
    const actions = {
        InsertSpace: insertSpace,
        Reverse: reverse,
        ChangeAll: changeAll,
    }

    function insertSpace(i) {
        msg = `${msg.substring(0, i)} ${msg.substring(i)}`
    }

    function reverse(a) {
        if (!msg.includes(a)) {
            console.log("error")
            return null
        }

        msg = msg.replace(a, "")
        msg = `${msg}${a.split("").reverse().join("")}`
    }

    function changeAll(a, b) {
        b = b.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
        const r = new RegExp(a, "g")
        msg = msg.replace(r, b)
    }

    arr.forEach(x => {
        const [command, y, z] = x.split(":|:")
        if (actions[command](y, z) !== null) console.log(msg)
    })

    console.log(`You have a new text message: ${msg}`)
}
