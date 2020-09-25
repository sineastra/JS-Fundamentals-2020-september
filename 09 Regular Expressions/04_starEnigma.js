function foo([numberOfMsg, ...messages]) {
    let decryptedASCIIMsg = [];
    let attacksData = []
    for (let i = 0; i < numberOfMsg; i++) {
        let occurences = messages[i].match(/s|t|a|r/gi) !== null ? messages[i].match(/s|t|a|r/gi) : []
        let msgChars = messages[i].split('')
        msgChars.forEach(x => decryptedASCIIMsg.push(x.charCodeAt(0) - occurences.length))
        let decrypted = decryptedASCIIMsg.map(x => String.fromCharCode(x)).join('')
        const splitRegx = /@([A-Za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([AD])![^@\-!:>]*->(\d+)/gi
        let decryptedData = splitRegx.exec(decrypted)
        if (decryptedData !== null) {
            decryptedData = decryptedData.slice(1).filter(x => x !== '')
                attacksData.push(decryptedData)
        }
        decryptedASCIIMsg = []
    }
    let [attacked, destroyed] = [[], []]
    attacksData.forEach(x => x[2] === 'A' ? attacked.push(x) : destroyed.push(x))

    console.log(`Attacked planets: ${attacked.length}`)
    attacked.sort().forEach(x => console.log(`-> ${x[0]}`))
    console.log(`Destroyed planets: ${destroyed.length}`)
    destroyed.sort().forEach(x => console.log(`-> ${x[0]}`))
}