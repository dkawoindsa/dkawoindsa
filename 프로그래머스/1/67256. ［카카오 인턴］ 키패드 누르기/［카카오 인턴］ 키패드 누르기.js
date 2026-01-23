function solution(numbers, hand) {
    let answer = '';
    const numPads = {
        1:[0, 0], 2:[1, 0], 3:[2, 0],
        4:[0, 1], 5:[1, 1], 6:[2, 1],
        7:[0, 2], 8:[1, 2], 9:[2, 2],
        "*":[0, 3], 0:[1, 3], "#":[2, 3]
    };
    
    let lHand = "*";
    let rHand ="#";
          
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            answer += "L";
            lHand = numbers[i];
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer += "R";
            rHand = numbers[i];
        } else {
             const [lx, ly] = numPads[lHand];
             const [rx, ry] = numPads[rHand];
             const [nx, ny] = numPads[numbers[i]];
            
            let lDist = Math.abs(lx - nx) + Math.abs(ly - ny);
            let rDist = Math.abs(rx - nx) + Math.abs(ry - ny);
            
            if (lDist < rDist) {
                answer += "L";
                lHand = numbers[i];
            } else if (lDist > rDist) {
                answer += "R";
                rHand = numbers[i];
            } else {
                if (hand === "right") {
                    answer += "R";
                    rHand = numbers[i];
                } else {
                    answer += "L";
                    lHand = numbers[i];
                }
            }
        }
    }
    
    return answer;
}