function solution(A,B){
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    return A.reduce((tot, val, idx) => tot + val * B[idx], 0);
}