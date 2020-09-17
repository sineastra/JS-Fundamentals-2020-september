function foo(arr) {
    arr.forEach(x =>
        x.toString() === x.toString().split("").reverse().join("")
            ? console.log("true")
            : console.log("false")
    )
}