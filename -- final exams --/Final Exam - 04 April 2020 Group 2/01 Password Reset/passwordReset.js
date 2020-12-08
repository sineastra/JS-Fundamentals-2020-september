function foo(arr) {
    let str = arr.shift()
    arr = arr.slice(0, arr.indexOf("Done"))
    const actions = {
        TakeOdd: takeOdd,
        Cut: cut,
        Substitute: substitute,
    }

    function takeOdd() {
        str = str.split("").reduce((a, v, i) => {
            if (i % 2 !== 0) {
                a += v
            }
            return a
        }, "")
        console.log(str)
    }

    function cut(i, l) {
        str = str.substring(0, i) + str.substring(i + l)
        console.log(str)
    }

    function substitute(s, sb) {
        if (str.includes(s)) {
            // sb = sb.replace(/[[\]/{}()*+?.\\^$|]/g, "\\$&")
            const r = new RegExp(s, "g")
            str = str.replace(r, sb)
            console.log(str)
        } else {
            console.log(`Nothing to replace!`)
        }
    }

    arr.forEach(x => {
        const [a, b, c] = x.split(" ").map(x => (isNaN(x) ? x : Number(x)))

        actions[a](b, c)
    })

    console.log(`Your password is: ${str}`)
}
