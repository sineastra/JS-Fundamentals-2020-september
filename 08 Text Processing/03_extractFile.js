function foo(str) {
    const match = str.substring(str.lastIndexOf('\\') + 1)
    const name = match.substring(0, match.lastIndexOf('.'))
    const extension = match.substring(match.lastIndexOf('.') + 1)

    console.log(`File name: ${name}
File extension: ${extension}`)
}