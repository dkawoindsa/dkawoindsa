function solution(people, limit) {
    let answer = 0;
    
    people.sort((a, b) => b - a);
    
    for (let i = 0; i < people.length; i++) {
        let lightPerson = people[people.length - 1];
        let heavyPerson = people[i];
                
        if (lightPerson + heavyPerson <= limit) {
            answer++;
            people.pop();
        } else {
            answer++
        }
    }
    
    
    return answer;
}