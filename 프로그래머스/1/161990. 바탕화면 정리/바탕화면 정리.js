function solution(wallpaper) {
    let answer = [];
    let x1 = -1;
    let x2 = -1;
    let y = [];
    
    for (let i = 0; i < wallpaper.length; i++) {
        if (wallpaper[i].includes('#')) {
            if (x1 === -1) {
                x1 = i;
            }
            x2 = i+1;
        }
    }
    
    for (let i = 0; i < wallpaper.length; i++) {
       for (let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] === '#') {
                y.push(j);
            }
       }
    }
    
    
    return [x1, Math.min(...y), x2, Math.max(...y) + 1 ];
}