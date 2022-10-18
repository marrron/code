function solution(my_string, n) {
    let str = my_string.split('');
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < n; k++) {
            ans += str[i];
        }
    }

    return ans;
}