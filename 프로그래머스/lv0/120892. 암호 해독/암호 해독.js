function solution(cipher, code) {
    // cipher라는 String의 각 문자를 돌아야됨. 한 글자씩
    let arr = [...cipher]; // "abc" => ["a", "b", "c"]
    let answer = "";

    // "d f j a rdstddetckdaccccdegk"
    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % code === 0) {
            answer += arr[i];
        }
    }

    return answer;
}