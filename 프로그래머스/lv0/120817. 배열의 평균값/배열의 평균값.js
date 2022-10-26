function solution(numbers) {
  return numbers.reduce((a, c) => a + c, 0) / numbers.length;
}

function solution(numbers) {
  let answer = 0;
    for(i=0; i<numbers.length; i++){
        answer += numbers[i] / numbers.length
    }
    return answer
}
