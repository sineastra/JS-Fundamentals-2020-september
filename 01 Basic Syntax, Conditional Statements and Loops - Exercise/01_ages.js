function foo (x) {
    switch (x) {
        case ((x >= 0 && x <= 2) ? x : -1):
            console.log("baby")
            break;
        case ((x >= 3 && x <= 13) ? x : -1):
            console.log("child")
            break;
        case ((x >= 14 && x <= 19) ? x : -1):
            console.log("teenager")
            break;
        case ((x >= 20 && x <= 65) ? x : -1):
            console.log("adult")
            break;
        case ((x >= 66) ? x : -1):
            console.log("elder")
            break;
        default:
            console.log(`out of bounds`)
            break;
    }
}