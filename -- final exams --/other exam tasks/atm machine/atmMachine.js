function foo(arr) {
    const actions = {
        1: report,
        2: withdraw,
        3: insert,
    }
    let atm = []

    function insert(a) {
        atm = [...atm, ...a]
        console.log(
            `Service Report: ${a.reduce(
                (a, v) => a + v,
                0
            )}$ inserted. Current balance: ${atm.reduce((a, v) => a + v, 0)}$.`
        )
    }

    function withdraw(arr) {
        if (arr[1] > arr[0]) {
            console.log(
                `Not enough money in your account. Account balance: ${arr[0]}$.`
            )
            return null
        }
        if (atm.reduce((a, v) => a + v, 0) < arr[1]) {
            console.log("ATM machine is out of order!")
            return null
        }

        atm = atm.sort((x, y) => y - x)

        let withdrawn = 0
        for (let i = 0; i < atm.length; i++) {
            if (atm[i] > arr[1] - withdrawn) continue
            withdrawn += atm[i]
            atm = [...atm.slice(0,i), ...atm.slice(i+1)]
            if (withdrawn === arr[1]) {
                console.log(
                    `You get ${withdrawn}$. Account balance: ${arr[0] - withdrawn}$. Thank you!`
                )
                break
            }
        }
    }

    function report(b) {
        console.log(
            `Service Report: Banknotes from ${b[0]}$: ${
                atm.filter(x => x === b[0]).length
            }.`
        )
    }

    arr.forEach(x => {
        try {
            actions[x.length](x)
        } catch (e) {
            actions[3](x)
        }
    })
}

//cannot check for 100/100 contest hidden.
// solution on the net:

// function solve(inp) {
// 	let totalCashInATM = 0;
// 	let notes = {
// 		'1000': 0,
// 		'500': 0,
// 		'200': 0,
// 		'100': 0,
// 		'50': 0,
// 		'20': 0,
// 		'10': 0,
// 		'5': 0,
// 		'2': 0,
// 		'1': 0
// 	}
//
// 	inp.forEach(element => {
// 		if (element.length > 2) {
// 			insertMoney(element);
// 		} else if (element.length === 2) {
// 			withdrawMoney(element);
// 		} else if (element.length === 1) {
// 			makeReport(element);
// 		}
// 	});
//
// 	function totalCash(notes) {
// 		let totalCash = 0;
// 		for (let note in notes) {
// 			note = Number(note);
// 			totalCash += +notes[note] * note;
// 		}
// 		return totalCash;
// 	}
//
// 	function insertMoney(arary) {
// 		let arr=arary.filter(x=>x>0);
// 		let insertedCash = 0;
// 		arr.forEach(note => {
// 			insertedCash += +note;
// 			notes[note] = Number(notes[note]) + 1;
// 		});
// 		totalCashInATM = totalCash(notes);
// 		console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`);
// 	}
//
// 	function withdrawMoney(arr) {
// 		let accountBalance = +arr[0];
// 		let withdraw = +arr[1];
// 		let moneyToWithdraw = +arr[1];
// 		totalCashInATM = totalCash(notes);
//
//
// 		if (accountBalance < moneyToWithdraw) {
// 			console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
// 		} else if (totalCashInATM < moneyToWithdraw) {
// 			console.log('ATM machine is out of order!');
// 		} else {
// 			let sortedNotes = Object.entries(notes).sort((a, b) => b[0] - a[0]).filter(x => x[1]);
// 			sortedNotes.forEach(el => {
// 				let banknote = +el[0];
// 				if (banknote <= moneyToWithdraw) {
// 					let banknoteCount = Math.floor(moneyToWithdraw / banknote);
// 					moneyToWithdraw %= banknote;
// 					notes[banknote] -= banknoteCount;
// 				}
// 			});
// 			if (moneyToWithdraw === 0) {
// 				accountBalance -= withdraw;
// 				console.log(`You get ${withdraw}$. Account balance: ${accountBalance}$. Thank you!`);
// 			}
// 		}
// 	}
//
// 	function makeReport(arr) {
// 		let banknote = arr[0];
// 		console.log(`Service Report: Banknotes from ${banknote}$: ${notes[banknote]}.`);
// 	}
//
// }
