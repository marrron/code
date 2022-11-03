function solution(num_list) {
  const evenLength = num_list.filter(n => n % 2 === 0).length;
  return [evenLength, num_list.length - evenLength];
}

function solution(num_list) {
    var answer = [0, 0];

    for(let i = 0 ; i < num_list.length; i++){
        if(num_list[i] % 2 == 0) answer[0]++;
        else answer[1]++;
    }

    return answer;
}
