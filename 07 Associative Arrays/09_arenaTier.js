function foo(commands) {
    let gladiatorsPool = {}
    commands.splice(commands.indexOf("Ave Cesar"), commands.length)

    function doesExist(name) {
        return Object.keys(gladiatorsPool).includes(name)
    }

    function haveCommonTehnique(a, b) {
        const firstData = Object.entries(gladiatorsPool[a])
        const secondData = Object.entries(gladiatorsPool[b])
        return firstData.some(x => secondData.some(y => y.includes(x[0])))
    }

    function sumSkill(glad) {
        return glad.reduce((a, v) => a + v[1], 0)
    }

    function sortBySkill(x, y) {
        return sumSkill(Object.entries(y)) - sumSkill(Object.entries(x))
    }

    function sortByName(a, b) {
        return a.localeCompare(b)
    }

    for (let i = 0; i < commands.length; i += 1) {
        let [name, skill, skillValue] = commands[i].split(" -> ")
        if (skill !== undefined) {
            if (!gladiatorsPool[name]) gladiatorsPool[name] = {}
            if (!gladiatorsPool[name][skill]) gladiatorsPool[name][skill] = 0
            if (gladiatorsPool[name][skill] < Number(skillValue)) gladiatorsPool[name][skill] = Number(skillValue)
        } else {
            const [glad1, glad2] = name.split(" vs ")
            if (doesExist(glad1) && doesExist(glad2)) {
                if (haveCommonTehnique(glad1, glad2)) {
                    sumSkill(Object.entries(gladiatorsPool[glad1])) > sumSkill(Object.entries(gladiatorsPool[glad2]))
                        ? delete gladiatorsPool[glad2]
                        : delete gladiatorsPool[glad1]
                }
            }
        }
    }

    const result = Object.entries(gladiatorsPool).sort((x, y) =>
        sortBySkill(x[1], y[1]) !== 0 ? sortBySkill(x[1], y[1]) : sortByName(x[0], y[0])
    )
    result.forEach(x => {
        const skills = Object.entries(x[1]).sort((x, y) => (y[1] - x[1] !== 0 ? y[1] - x[1] : sortByName(x[0], y[0])))
        console.log(`${x[0]}: ${sumSkill(skills)} skill`)
        skills.forEach(x => console.log(`- ${x[0]} <!> ${x[1]}`))
    })
}