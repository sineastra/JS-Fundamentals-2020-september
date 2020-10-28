function solve(input = []) {
    let emp1Eff = +input.shift();
    let emp2Eff = +input.shift();
    let emp3Eff = +input.shift();
    let people = +input.shift();
    let neededHours = 0;
    let answerPerHour = emp1Eff + emp2Eff + emp3Eff;

    while (people > 0) {
        people -= answerPerHour;
        neededHours++;

        if (neededHours % 4 === 0) {
            neededHours++;
        }
    }

    console.log(`Time needed: ${neededHours}h.`);
}