function foo(arr) {
    class Hero {
        constructor(name, hp, mp) {
            this._name = name
            this._hp = hp > 100 ? 100 : hp
            this._mp = mp > 200 ? 200 : mp
        }

        get name() {
            return this._name
        }
        get hp() {
            return this._hp
        }
        get mp() {
            return this._mp
        }
        set mp(a) {
            this._mp = a
            if (this._mp > 200) this._mp = 200
        }
        set hp(a) {
            this._hp = a
            if (this._hp > 100) this._hp = 100
        }
    }
    let heroes = []
    const heroesCount = Number(arr.shift())
    arr = arr.slice(0, arr.indexOf("End"))
    const actions = {
        CastSpell: castSpell,
        TakeDamage: takeDmg,
        Recharge: recharge,
        Heal: heal,
    }

    for (let i = 0; i < heroesCount; i++) {
        const [a, b, c] = arr
            .shift()
            .split(" ")
            .map(x => (isNaN(x) ? x : Number(x)))
        heroes.push(new Hero(a, b, c))
    }

    function getHeroIndex(n) {
        return heroes.findIndex(x => x.name === n)
    }

    function castSpell(hero, b, c) {
        if (hero.mp >= b) {
            hero.mp -= b
            console.log(
                `${hero.name} has successfully cast ${c} and now has ${hero.mp} MP!`
            )
        } else {
            console.log(`${hero.name} does not have enough MP to cast ${c}!`)
        }
    }

    function takeDmg(hero, b, c) {
        hero.hp = hero.hp - b
        if (hero.hp > 0) {
            console.log(
                `${hero.name} was hit for ${b} HP by ${c} and now has ${hero.hp} HP left!`
            )
        } else {
            heroes.splice(getHeroIndex(hero.name), 1)
            console.log(`${hero.name} has been killed by ${c}!`)
        }
    }

    function recharge(hero, a) {
        const recovered = hero.mp + a > 200 ? 200 - hero.mp : a

        hero.mp += a
        console.log(`${hero.name} recharged for ${recovered} MP!`)
    }

    function heal(hero, a) {
        const recovered = hero.hp + a > 100 ? 100 - hero.hp : a

        hero.hp += a
        console.log(`${hero.name} healed for ${recovered} HP!`)
    }

    arr.forEach(x => {
        const [a, b, c, d] = x.split(" - ").map(x => (isNaN(x) ? x : Number(x)))

        actions[a](heroes[getHeroIndex(b)], c, d)
    })

    heroes = heroes.sort((a, b) =>
        b.hp - a.hp === 0 ? a.name.localeCompare(b.name) : b.hp - a.hp
    )

    heroes.forEach(x =>
        console.log(`${x.name}
  HP: ${x.hp}
  MP: ${x.mp}`)
    )
}