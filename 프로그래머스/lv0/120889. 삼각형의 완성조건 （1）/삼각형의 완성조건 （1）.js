function solution(sides) {
    let sides2 = sides.sort()
    if (sides2[2] >= sides2[0]+sides2[1]){
        return 2 
    }else return 1
}
