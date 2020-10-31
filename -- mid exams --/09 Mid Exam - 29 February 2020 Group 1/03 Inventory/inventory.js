function solve(arr) {
    const items = arr.shift().split(", ")

    class Inventory {
        constructor(items) {
            this.items = items
        }
        itemExists(i) {
            return this.items.some(x => x === i)
        }

        Collect = i => {
            if (!this.itemExists(i)) {
                this.items.push(i)
            }
        }

        Drop = i => {
            if (this.itemExists(i)) {
                this.items = this.items.filter(x => x !== i)
            }
        }

        "Combine Items" = items => {
            const [oldItem, newItem] = items.split(":")
            if (this.itemExists(oldItem)) {
                const startIndex = this.items.findIndex(x => x === oldItem)
                this.items.splice(startIndex + 1, 0, newItem)
            }
        }

        Renew = e => {
            if (this.itemExists(e)) {
                const index = this.items.findIndex(x => x === e)
                // this.items.forEach((x, i) => console.log(`Value: ${x}, Index: ${i}`));
                const removedItem = this.items.splice(index, 1)
                this.items.push(removedItem[0])
                // this.items.forEach((x, i) => console.log(`Value: ${x}, Index: ${i}`));
            }
        }

        "Craft!" = () => {
            console.log(this.items.join(", "))
        }
    }

    const MyInventory = new Inventory(items)
    arr.forEach(e => {
        const [command, value] = e.split(" - ")
        MyInventory[command](value)
    })
}
