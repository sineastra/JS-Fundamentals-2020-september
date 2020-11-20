function foo(data) {
    const regx = new RegExp("=[A-Z][A-Za-z]{2,}=|\\/[A-Z][A-Za-z]{2,}\\/", "g")
    let matches = data.match(regx) || []

    matches = matches.map(x =>
        x[0] === "="
            ? x.split("=").filter(x => x !== "")
            : x.split("/").filter(x => x !== "")
    )
    const points = matches.reduce((a, v) => a + v[0].length, 0)
    matches = matches.map(x => x.join(""))

    console.log(`Destinations: ${matches.join(", ")}`)
    console.log(`Travel Points: ${points}`)
}
