function foo(args) {
	let points = 0;
	let attendances = 0;
	const [x, y, z, ...rest] = args.map(x => Number(x));

	rest.forEach(x => {
		const tempPoints = (x / y) * (5 + z);
		if (tempPoints > points) {
			points = tempPoints;
			attendances = x;
		}
	});

	return `Max Bonus: ${Math.round(points)}.
The student has attended ${attendances} lectures.`;
}