function foo(arr, n) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[i] + arr[y] === n) console.log(`${arr[i]} ${arr[y]}`)
        }
    }
}