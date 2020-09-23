function foo(str) {
    const part1 = str.substring(0, str.length / 2).split('').reverse().join('')
    const part2 = str.substring(str.length / 2).split('').reverse().join('')
    console.log(`${part1}
${part2}`)
}