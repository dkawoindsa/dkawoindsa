function solution(today, terms, privacies) {
    let answer = [];
    const [tyear, tmonth, tday] = today.split('.').map(Number);
    const todayTotal = (tyear * 12 * 28) + (tmonth * 28) + (tday);
    
    const termsMap = {};
     terms.forEach(term => {
         const [type, period] = term.split(' ');
         termsMap[type] = Number(period);
     })
    
    privacies.forEach((privacy, index) => {
        const [date, type] = privacy.split(' ');
        const [year, month, day] = date.split('.').map(Number);
        const privacyTotal = (year * 12 * 28) + (month * 28) + (day);
        
        const totalDate = privacyTotal + termsMap[type] * 28 - 1;
        
        if (todayTotal > totalDate) {
            answer.push(index + 1);
        }
    })
    return answer;
}