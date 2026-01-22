function solution(survey, choices) {
    let answer = '';
    let personal = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < survey.length; i++) {
        if (survey[i] === "RT") {
            if (choices[i] >= 4) {
                personal[1] += Math.abs(4 - choices[i]);
            } else {
                personal[0] += Math.abs(4 - choices[i]);
            }
        } else if (survey[i] === "TR") {
            if (choices[i] >= 4) {
                personal[0] += Math.abs(4 - choices[i]);
            } else {
                personal[1] += Math.abs(4 - choices[i]);
            }
        }
        
        if (survey[i] === "CF") {
            if (choices[i] >= 4) {
                personal[3] += Math.abs(4 - choices[i]);
            } else {
                personal[2] += Math.abs(4 - choices[i]);
            }
        } else if (survey[i] === "FC") {
            if (choices[i] >= 4) {
                personal[2] += Math.abs(4 - choices[i]);
            } else {
                personal[3] += Math.abs(4 - choices[i]);
            }
        }
        
        if (survey[i] === "JM") {
            if (choices[i] >= 4) {
                personal[5] += Math.abs(4 - choices[i]);
            } else {
                personal[4] += Math.abs(4 - choices[i]);
            }
        } else if (survey[i] === "MJ") {
            if (choices[i] >= 4) {
                personal[4] += Math.abs(4 - choices[i]);
            } else {
                personal[5] += Math.abs(4 - choices[i]);
            }
        }
        
        if (survey[i] === "AN") {
            if (choices[i] >= 4) {
                personal[7] += Math.abs(4 - choices[i]);
            } else {
                personal[6] += Math.abs(4 - choices[i]);
            }
        } else if (survey[i] === "NA") {
            if (choices[i] >= 4) {
                personal[6] += Math.abs(4 - choices[i]);
            } else {
                personal[7] += Math.abs(4 - choices[i]);
            }
        }
        
        
    }
    personal[0] >= personal[1] ? answer += 'R' : answer += 'T';
    personal[2] >= personal[3] ? answer += 'C' : answer += 'F';
    personal[4] >= personal[5] ? answer += 'J' : answer += 'M';
    personal[6] >= personal[7] ? answer += 'A' : answer += 'N';
    
    return answer;
}

