function foo(arr) {
    const regx = new RegExp(
        `#( *[a-zA-Z]+)+#[0-9]{2}\\/[0-9]{2}\\/[0-9]{2}#[0-9]+#|\\|( *[a-zA-Z]+)+\\|[0-9]{2}\\/[0-9]{2}\\/[0-9]{2}\\|[0-9]+\\|`,
        "g"
    )
    const matches = arr[0].match(regx) || []
    const items = [[], [], []]

    function distributeItems(arr) {
        items.forEach((_, i) => items[i].push(arr[i]))
    }

    function splitItems(i) {
        return i[0] === "#"
            ? i.split("#").filter(x => x !== "")
            : i.split("|").filter(x => x !== "")
    }

    matches.forEach(x => {
        distributeItems(splitItems(x))
    })

    console.log(
        `You have food to last you for: ${Math.floor(
            items[2].map(Number).reduce((a, v) => a + v, 0) / 2000
        )} days!`
    )
    items[0].forEach((x, i) => {
        console.log(
            `Item: ${x}, Best before: ${items[1][i]}, Nutrition: ${items[2][i]}`
        )
    })
}

function bar(arr) {
	const regx = /#[A-Za-z ]+#[0-9]{2}\/[0-9]{2}\/[0-9]{2}#[0-9]+#|\|[A-Za-z ]+\|[0-9]{2}\/[0-9]{2}\/[0-9]{2}\|[0-9]+\|/g
	let matches = arr[0].match(regx) || []

	matches = matches.map(x => (x.charAt(0) === "|" ? x.split("|").filter(x => x !== "") : x.split("#").filter(x => x !== "")))
	const days = Math.floor(matches.reduce((a, v) => a + Number(v[2]), 0) / 2000)

	console.log(`You have food to last you for: ${days} days!`)
	matches.forEach(x => {
		console.log(`Item: ${x[0]}, Best before: ${x[1]}, Nutrition: ${x[2]}`)
	})
}

function foo(arr) {
	const regx = /#[A-Za-z ]+#[0-9]{2}\/[0-9]{2}\/[0-9]{2}#[0-9]+#|\|[A-Za-z ]+\|[0-9]{2}\/[0-9]{2}\/[0-9]{2}\|[0-9]+\|/g
	let matches = arr[0].match(regx) || []
	let days = 0

	for (let i = 0; i < matches.length; i++) {
		if (matches[i].charAt(0) === "|") {
			matches[i] = matches[i].split("|").filter(x => x !== "")
		} else {
			matches[i] = matches[i].split("#").filter(x => x !== "")
		}
	}

	for (let i = 0; i < matches.length; i++) {
		days += Number(matches[i][2])
	}
	days = Math.floor(days / 2000)

	console.log(`You have food to last you for: ${days} days!`)
	for (let i = 0; i < matches.length; i++) {
		console.log(`Item: ${matches[i][0]}, Best before: ${matches[i][1]}, Nutrition: ${matches[i][2]}`)
	}
}
