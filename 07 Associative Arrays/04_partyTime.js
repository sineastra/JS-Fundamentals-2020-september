function foo(arr) {

    // SPECIALLY FOR THE DUMB DUMB DUMB PEOPLE MAKING US WRITE DUMB CODE TO GET THE 100 POINTS. HERE COMES YOUR DREAM.
    let i = 0
    let vips = []
    let regulars = []

    function isRegular(str) {
        return isNaN(Number(str.charAt(0)))
    }
    while (arr[i] !== "PARTY") {
        if (isRegular(arr[i])) regulars.push(arr.shift())
        else vips.push(arr.shift())
    }
    arr.shift()
    i = 0
    while (arr[i] !== undefined) {
        if (vips.includes(arr[i]) || regulars.includes(arr[i])) {
            if (isRegular(arr[i])) {
                const index = regulars.indexOf(arr[i])
                regulars.splice(index, 1)
            } else {
                const index = vips.indexOf(arr[i])
                vips.splice(index, 1)
            }
        }
        i += 1
    }

    console.log(vips.length + regulars.length)
    console.log(vips.join("\n"))
    console.log(regulars.join("\n"))
}
