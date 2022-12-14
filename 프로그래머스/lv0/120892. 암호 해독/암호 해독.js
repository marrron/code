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

// function solution(cipher, code) {
//     let answer = [];
//     answer = cipher.split('').filter((item,index)=>((index+1)%code ===0)).join("")
//     return answer;
// }

// function solution(cipher, code) {
//     var answer = '';
    
//     for (let i = code - 1; i < cipher.length; i++) {
//         if((i + 1) % code === 0) {
//             answer += cipher[i];
//         }
//     }
    
//     return answer;
