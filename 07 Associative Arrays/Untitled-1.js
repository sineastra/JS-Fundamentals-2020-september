function legendary(input) {
    let legendaryMap = new Map()
    legendaryMap.set('shards', 'Shadowmourne')
    legendaryMap.set('fragments', 'Valanyr')
    legendaryMap.set('motes', 'Dragonwrath')
 
    let materials = input.split(' ').map(x => x.toLowerCase())
    let materialsReg = new Map()
    let keyMaterials = ['shards', 'fragments', 'motes']
    let firstMaterial = ''
    let legendaryItem = ''
 
    for (let i = 0; i < materials.length; i += 2) {
 
        if (materialsReg.has(materials[i + 1])) {
            materialsReg.set(materials[i + 1], materialsReg.get(materials[i + 1]) + +(materials[i]))
        } else {
            materialsReg.set(materials[i + 1], +materials[i])
        }
 
        if (materialsReg.get(materials[i + 1]) >= 250 && keyMaterials.includes(materials[i + 1])) {
            materialsReg.set(materials[i + 1], materialsReg.get(materials[i + 1]) - 250)
            firstMaterial = materials[i + 1]
            break
        }
    }
 
    legendaryItem = legendaryMap.get(firstMaterial)
    console.log(`${legendaryItem} obtained!`);
 
 
    let filteredKey = Array.from(materialsReg).filter((x) => keyMaterials.includes(x[0]))
 
    let sortedJunk = Array.from(materialsReg).filter((x) => !keyMaterials.includes(x[0])).sort((a, b) => a[0].localeCompare(b[0]))
 
    let tempArr = []
 
    for (const [mat, quant] of filteredKey) {
        tempArr.push(mat)
    }
 
    if (filteredKey.length < 3) {
 
        for (const keyMat of keyMaterials) {
            if (!tempArr.includes(keyMat)) {
                filteredKey.push([keyMat, 0])
            }
        }
    }
 
    sortedKey = filteredKey.sort((a, b) => {
 
        if (b[1] == a[1]) {
            return a[0].localeCompare(b[0])
        } else {
            return b[1] - a[1]
        }
 
    })
 
    for (const [mat, quant] of sortedKey) {
        console.log(`${mat}: ${quant}`);
    }
 
    for (const [mat, quant] of sortedJunk) {
        console.log(`${mat}: ${quant}`);
    }
 
}