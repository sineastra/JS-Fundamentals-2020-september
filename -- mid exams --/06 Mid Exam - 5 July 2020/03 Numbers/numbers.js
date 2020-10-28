function foo(str) {
    const workArr = str.split(" ").map(x => Number(x));
    const average = workArr.reduce((a, v) => a + v) / workArr.length;
    const filtered = workArr.filter(x => x > average).sort((x, y) => y - x);
    return filtered.length + 0 ? filtered.slice(0, 5).join(" ") : `No`;
}