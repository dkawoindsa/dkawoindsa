function solution(arr) {
    
    let sortArr = [...arr].sort((a, b) => b - a);
    let min = sortArr[sortArr.length - 1];
    
    arr = arr.filter((element) => element !== min);
               
    return arr.length === 0 ? [-1] : arr;
}