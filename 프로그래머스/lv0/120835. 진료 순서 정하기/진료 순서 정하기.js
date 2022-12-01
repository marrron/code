function solution(emergency) {
	const sorted = emergency.slice().sort((a, b) => b - a);
	return emergency.map((v) => sorted.indexOf(v) + 1);
}