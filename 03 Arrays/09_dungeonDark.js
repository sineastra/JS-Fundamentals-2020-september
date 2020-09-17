function solve(str) {
    const commands = str[0].split("|");

    class Player {
        state = {
            hp: 100,
            coins: 0,
            room: 1,
            isAlive: true,
        };

        potion = hp => {
            let healed = 0;
            if (this.state.hp + Number(hp) > 100) {
                healed = 100 - this.state.hp;
                this.state.hp = 100;
            } else {
                healed = hp
                this.state.hp = this.state.hp + Number(hp);
            }
            this.state.room += 1;
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${this.state.hp} hp.`);
        };
        chest = coins => {
            this.state.coins += Number(coins);
            this.state.room += 1;
            console.log(`You found ${coins} coins.`);
        };

        fight = (monster, att) => {
            this.state.hp -= Number(att);
            if (this.state.hp > 0) {
                console.log(`You slayed ${monster}.`);
                this.state.room += 1;
            } else {
                this.state.isAlive = false;
                console.log(`You died! Killed by ${monster}.
Best room: ${this.state.room}`);
            }
        };
    }

    const CurrentPlayer = new Player();
    for (let i = 0; i < commands.length; i++) {
        let [event, number] = commands[i].split(" ");
        if (CurrentPlayer.state.isAlive) {
            if (typeof CurrentPlayer[event] !== "function") {
                CurrentPlayer["fight"](event, number);
            } else {
                CurrentPlayer[event](number);
            }
        } else {
            break;
        }
    }

    if (CurrentPlayer.state.isAlive) {
        console.log(`You've made it!
Coins: ${CurrentPlayer.state.coins}
Health: ${CurrentPlayer.state.hp}`)
    }
}