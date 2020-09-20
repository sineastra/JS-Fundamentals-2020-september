function foo(data) {
    let dictionary = data.reduce((a, v) => {
        const letter = v.charAt(0)
        a[letter] = []
        return a
    }, {})

    data.forEach(x => {
        const letter = x.charAt(0)
        let formatted = x.split(" : ").join(": ")
        dictionary[letter].push(formatted)
    })

    dictionary = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]))
    dictionary.forEach(x => {
        console.log(`${x[0]}
  ${x[1].sort((a, b) => a.localeCompare(b)).join("\n  ")}`)
    })
}
