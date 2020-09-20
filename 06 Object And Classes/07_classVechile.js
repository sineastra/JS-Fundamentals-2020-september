class Vehicle {
    type = ""
    model = ""
    parts = {
        engine: 0,
        power: 0,
        quality: 0,
    }
    fuel = 0;
    constructor(type, model, parts, fuel) {
        ;(this.type = type),
            (this.model = model),
            (this.parts = { ...parts, quality: parts.engine * parts.power }),
            (this.fuel = fuel)
    }

    drive = x => (this.fuel -= x)
}