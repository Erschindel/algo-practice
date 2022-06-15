function format (val){
    let timeSplit = {}, ans = '';

    if(!val) return 'now';

    while(val){
        if(val >= 31536000){
            timeSplit.year ? timeSplit.year++ : timeSplit.year = 1;
            val -= 31536000;
            continue;
        }
        if(val >= 86400){
            timeSplit.day ? timeSplit.day++ : timeSplit.day = 1;
            val -= 86400;
            continue;
        }
        if(val >= 3600){
            timeSplit.hour ? timeSplit.hour++ : timeSplit.hour = 1;
            val -= 3600;
            continue;
        }
        if(val >= 60){
            timeSplit.minute ? timeSplit.minute++ : timeSplit.minute = 1;
            val -= 60;
            continue;
        }
        timeSplit.second ? timeSplit.second++ : timeSplit.second = 1;
        val -= 1;
    }

    let timeKeys = Object.keys(timeSplit);
    let addS = timeKeys.map(x => {return timeSplit[x] > 1 ? `${x}s` : x})

    if(addS.length === 1) return `${timeSplit[timeKeys[0]]} ${addS[0]}`

    while(addS.length > 2){
        ans += `${timeSplit[timeKeys.shift()]} ${addS.shift()}, `;
    }

    ans += `${timeSplit[timeKeys[0]]} ${addS[0]} and ${timeSplit[timeKeys[1]]} ${addS[1]}`;

    console.log(ans);
    return ans;
}

let val1 = 31536000 * 3 + 86400 * 5 + 7273;
let val2 = 1;
let val3 = 60;
let val4 = 0;

format(val1)