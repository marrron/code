function solution(numbers) {    
    let answer = numbers.sort((a, b) => b - a)[0] * numbers.sort((a, b) => b - a)[1]
    
    return answer
}