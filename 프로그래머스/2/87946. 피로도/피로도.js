function solution(k, dungeons) {
    let answer = 0;
    let visited = new Array(dungeons.length).fill(false);

    function dfs(currentK, count) {
        answer = Math.max(answer, count);

        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= currentK) {
                visited[i] = true;
                dfs(currentK - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0);
    return answer;
}