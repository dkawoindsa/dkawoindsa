function solution(n) {

    return parseInt(n.toString().split('').sort((a, b) => b - a).map(Number).join(''));
}