function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    
    cities = cities.map(city => city.toUpperCase());
    
     if (cacheSize === 0) return cities.length * 5;
    
    for (let i = 0; i < cacheSize; i++) {
        if (cache.includes(cities[i])) {
            cache.push(cities[i]);
            answer++;
        } else {
            cache.push(cities[i]);
            answer += 5;
        }
    }
    
    for (let i = cacheSize; i < cities.length; i++) {
         if (cache.includes(cities[i])) {
             let cityIndex = cache.indexOf(cities[i]);
             cache.splice(cityIndex, 1);
             cache.push(cities[i]);
             answer++;
             
         } else {
             cache.shift();
             cache.push(cities[i]);
             answer += 5;
         }
    }
    
    return answer;
}