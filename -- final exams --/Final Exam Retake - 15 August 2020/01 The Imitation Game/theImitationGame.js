function foo(arr) {
    arr = arr.slice(0, arr.indexOf("Decode"))
    let msg = arr.shift()
    const actions = {
        Move: move,
        Insert: insert,
        ChangeAll: changeAll,
    }

    function getParts(i) {
        return [msg.substring(0, i), msg.substring(i)]
    }

    function move(n) {
        const [a, b] = getParts(n)
        msg = b + a
    }

    function insert(i, v) {
        const [a, b] = getParts(i)
        msg = `${a}${v}${b}`
    }

    function changeAll(s, r) {
        s = s.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
        const regx = new RegExp(s, "g")
        msg = msg.replace(regx, r)
    }

    arr.forEach(x => {
        const [command, i, i1] = x.split("|")
        actions[command](i, i1)
    })

    console.log(`The decrypted message is: ${msg}`)
}