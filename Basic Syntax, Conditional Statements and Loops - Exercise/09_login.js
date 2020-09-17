function foo(arr) {
    const user = arr.shift()
    const password = user.split("").reverse().join("")
    let tries = 0

    for (const e of arr) {
        if (e !== password) {
            tries += 1
            if (tries >= 4) {
                console.log(`User ${user} blocked!`)
                break
            } else {
                console.log("Incorrect password. Try again.")
            }
        } else {
            console.log(`User ${user} logged in.`)
        }
    }
}