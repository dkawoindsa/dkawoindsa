function solution(players, callings) {
    const rank = {};
    
    players.forEach((name, index) => {rank[name] = index});
    
    for (let name of callings) {
        let currentIndex = rank[name];
        let frontplayer = players[currentIndex - 1];
        
        players[currentIndex - 1] = name;
        players[currentIndex] = frontplayer;
        
        rank[name]--;
        rank[frontplayer]++;
    }
    
    return players;
}