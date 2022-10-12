function solution(my_string, n) {
    let str = my_string.split('');
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < n; j++) {
            ans += str[i];
        }
    }

    return ans;
}