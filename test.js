function foo(arr) {
    let str = arr.shift()
    let pattern = arr.shift()
    let r = new RegExp(pattern, "g")

    for (;;) {
        if (pattern === "") break
        if (str.length < pattern.length * 2) break
        let matches = (str.match(r) || []).filter(Boolean)
        if (matches.length >= 2) {
            str = str.replace(pattern, "")
            str =
                str.slice(0, str.lastIndexOf(pattern)) +
                str.slice(str.lastIndexOf(pattern) + pattern.length)
            pattern = pattern.replace(
                pattern[Math.floor(pattern.length / 2)],
                ""
            )
            r = new RegExp(pattern, "g")
            console.log("Shaked it.")
        } else {
            console.log("No shake.")
            console.log(str)
            break
        }
    }
}

foo(["##mtm!!mm.mm*mtm.#", "mtm"])
