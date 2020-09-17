function foo(base, increment) {
    const materials = {
        Stone: 0,
        Marble: 0,
        "Lapis Lazuli": 0,
        Gold: 0,
    }
    let stepCount = 1
    let currentStep = base

    function squareArea(a) {
        return a * a
    }

    while (currentStep - 2 >= 1) {
        const reducedArea = squareArea(currentStep - 2)
        materials.Stone += reducedArea * increment
        stepCount % 5 === 0
            ? (materials["Lapis Lazuli"] +=
                  (squareArea(currentStep) - squareArea(currentStep - 2)) * increment)
            : (materials.Marble += (squareArea(currentStep) - squareArea(currentStep - 2)) * increment)

        stepCount += 1
        currentStep -= 2
    }
    if (currentStep === 4) currentStep -= 2
    materials.Gold = squareArea(currentStep) * increment

    Object.entries(materials).forEach(e => {
        console.log(`${e[0]} required: ${Math.ceil(e[1])}`)
    })
    console.log(`Final pyramid height: ${Math.floor(stepCount * increment)}`)
}

foo(23, 0.5)
