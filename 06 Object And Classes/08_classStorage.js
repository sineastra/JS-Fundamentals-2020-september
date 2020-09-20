class Storage {
    constructor(capacity) {
        this.capacity = capacity
        this.storage = []
        this.totalCost = 0
    }

    addProduct = p => {
            this.storage.push(p)
            this.capacity -= p.quantity
            this.totalCost += p.price * p.quantity
    }
    getProducts = () => {
        this.storage = this.storage.map(x => JSON.stringify(x))
        return this.storage.join('\n')
    }
}