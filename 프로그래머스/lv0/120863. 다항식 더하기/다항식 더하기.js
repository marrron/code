function solution(polynomial) {
	let answer = [];
	answer.push(
		polynomial
			.split(" + ")
			.filter((v) => v.includes("x"))
			.map((v) => +v.replace("x", "") || 1)
			.reduce((a, c) => a + c, 0)
	);
	answer.push(
		polynomial
			.split(" + ")
			.filter((v) => !v.includes("x"))
			.map((v) => +v)
			.reduce((a, c) => a + c, 0)
	);

	let result = [];
	if (answer[0]) result.push(`${answer[0] === 1 ? "" : answer[0]}x`);
	if (answer[1]) result.push(answer[1]);
	// [10].join(' + ')
	// '10'
	return result.join(" + ");
}