function solution(board, moves) {
    let answer = 0;
    
    let basket = [];
    let col = 0;
    
    for (let i = 0; i < moves.length; i++) {
        col = moves[i] - 1;
        
        for (let row = 0; row < board.length; row++) {
           if (board[row][col] != 0) {
               if (basket[basket.length - 1] === board[row][col]) {
                   basket.pop();
                   answer += 2;
               } else {
                  basket.push(board[row][col]); 
               }
               board[row][col] = 0;
               break;
           }
        }
    }
    
    return answer;
}