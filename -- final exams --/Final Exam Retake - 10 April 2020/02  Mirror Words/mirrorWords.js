function foo(arr) {
    const matches =
        arr
            .shift()
            .match(
                /#[A-Za-z]{3,}##[A-Za-z]{3,}#|@[A-Za-z]{3,}@@[A-Za-z]{3,}@/g
            ) || []
    arr = arr.filter(x => x !== "")
    let mirrors = []

    function printMatches() {
        console.log(
            matches.length === 0
                ? "No word pairs found!"
                : `${matches.length} word pairs found!`
        )
    }

    function printMirrors() {
        if (mirrors.length === 0) {
            console.log("No mirror words!")
        } else {
            mirrors = mirrors
                .reduce((a, v, i, arr) => {
                    if (i % 2 !== 0) a.push(`${arr[i - 1]} <=> ${v}`)
                    return a
                }, [])
                .join(", ")
            console.log(`The mirror words are: 
${mirrors}`)
        }
    }

    matches.forEach(x => {
        const [a, b] =
            x[0] === "#"
                ? x.split("#").filter(Boolean)
                : x.split("@").filter(Boolean)
        if (a === b.split("").reverse().join("")) {
            mirrors.push(a, b)
        }
    })

    printMatches()
    printMirrors()
}
