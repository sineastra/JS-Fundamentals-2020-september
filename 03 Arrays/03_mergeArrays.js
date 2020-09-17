function foo(arr1, arr2) {
    const result = arr1.map((x, i) => (i % 2 === 0 ? Number(x) + Number(arr2[i]) : x + arr2[i]))
    return result.join(" - ")
}