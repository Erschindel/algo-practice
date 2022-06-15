function new_car(start, end, add, rate){
    let ans = [0,0], saved = 0;
    while(start + saved < end){
        if(ans[0] % 2) rate += .5
        start -= (rate * start) / 100;
        end -= (rate * end) / 100;
        ans[0]++;
        saved += add;
        console.log(`start + saved: ${Math.round(start + saved)} \t--- end: ${Math.round(end)} \t--- rate: ${rate}`)
    }
    
    ans[1] += Math.round(start + saved - end);
    console.log(ans)
    return ans
}

const val1 = [2000, 8000, 1000, 1.5]
const val2 = [12000, 8000, 1000, 1.5]
new_car(...val2)