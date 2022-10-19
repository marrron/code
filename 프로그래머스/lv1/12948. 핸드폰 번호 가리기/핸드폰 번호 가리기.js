function solution(phone_number) {
    const a = "*"
    const b = phone_number.slice(-4)
    return a.repeat(phone_number.length-4) + b;
}