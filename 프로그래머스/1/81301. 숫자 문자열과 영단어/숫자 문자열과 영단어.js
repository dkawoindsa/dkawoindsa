function solution(s) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    numbers.forEach((alp, index) => {
        s = s.split(alp).join(index);
    });
    
    return Number(s);
}