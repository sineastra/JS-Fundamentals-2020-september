function foo(arr) {
    const info = arr.shift()
    const tests = {
        name: / [A-Z][A-Za-z]*-[A-Z][A-Za-z]*\.*-*[A-Z]?[A-Za-z]*? /g,
        airport: / [A-Z]{3}\/[A-Z]{3} /g,
        flightNum: / [A-Z]{1,3}[0-9]{1,5} /g,
        company: /- [A-Z][a-z]*\*[A-Z][a-z]* /g,
    }
    const names = (info.match(tests.name) || [])
        .filter(Boolean)
        .filter(filterName)
    const airport = (info.match(tests.airport) || []).filter(Boolean)
    const flight = (info.match(tests.flightNum) || []).filter(Boolean)
    const company = (info.match(tests.company) || []).filter(Boolean)
	const actions = {
    	name: () => {
    		const name = names[0].split('-').map(x => x.trim()).join(' ')
		    console.log(`Mr/Ms, ${name}, have a nice flight!`)
	    },
		flight: () => {

		}
	}

    function filterName(n) {
        n = n.split("-")
        if (n.length === 3 && n[1].includes(".")) return n
        if (n.length === 2 && !n[1].includes(".")) return n

        return null
    }
	actions[arr[0]]()
}

foo([
    ` ahah Second-Testov )*))&&ba SOF/VAR ela**
FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_-
T12G12 STD08:45  STA09:35 `,
])

foo([
    ` TEST-T.-TESTOV  SOF/VIE OS806 - 
Austrian*Airlines T24G55 STD11:15 STA11:50 `, 'name'
])

//not finished - no need. No judge tests anyway
//the 100/100 solution from git

// function solve(string, command) {
// 	let print = '';
//
// 	let nameRegexp = /(?<= )[A-Z]([A-Za-z]+)?-([A-Z]([A-Za-z]+)?.-)?[A-Z]([A-Za-z]+)?(?= )/gm;
// 	let name = (nameRegexp.exec(string)).shift().split('-').join(' ');
// 	let airportRegexp = /(?<= )[A-Z]{3}\/[A-Z]{3}?(?= )/gm;
// 	let airport = (airportRegexp.exec(string)).shift();
// 	let [fromAirport, toAirport] = airport.split('/');
// 	let flightNumberRegexp = /(?<= )[A-Z]{1,3}[0-9]{1,5}?(?= )/gm;
// 	let flightNumber = (flightNumberRegexp.exec(string)).shift();
// 	let companyRegexp = /(?<=- )[A-Z]([A-Za-z]+)?\*[A-Z]([A-Za-z]+)?(?= )/gm;
// 	let company = (companyRegexp.exec(string)).shift().split('*').join(' ');
//
// 	switch (command) {
// 		case 'name':
// 			print = `Mr/Ms, ${name}, have a nice flight!`;
// 			break;
// 		case 'flight':
// 			print = `Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`;
// 			break;
// 		case 'company':
// 			print = `Have a nice flight with ${company}.`;
// 			break;
// 		case 'all':
// 			print = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`;
// 			break;
// 	};
// 	console.log(print);
// }


