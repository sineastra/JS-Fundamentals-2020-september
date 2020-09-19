function foo(arr) {
    let items = arr.shift().split(" ")
    class Inventory {
        constructor(items) {
            this.items = items
        }

        getIndex = e => this.items.findIndex(x => x === e)

        Buy = i => {
            if (!this.items.includes(i)) this.items.push(i)
        }

        Trash = e => {
            if (this.items.includes(e)) this.items = this.items.filter(x => x !== e)
        }

        Repair = e => {
            if (this.items.includes(e)) {
                const index = this.getIndex(e)
                const result = this.items.splice(index, 1)
                this.items.push(result[0])
            }
        }

        Upgrade = x => {
            const [item, upgrade] = x.split("-")
            if (this.items.includes(item)) {
                const index = this.getIndex(item)
                this.items.splice(index + 1, 0, `${item}:${upgrade}`)
            }
        }
    }

    const currentInventory = new Inventory(items)
    arr.forEach(x => {
        const [action, item] = x.split(" ")
        currentInventory[action](item)
    })

    console.log(currentInventory.items.join(' '))
}
