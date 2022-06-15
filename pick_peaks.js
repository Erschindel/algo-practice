const localMaxima = (arr) => {
    let ans = {pos:[], peaks:[]}
    arr.forEach((x, i) => {
        if(x > arr[i - 1] && x > arr[i + 1]){
            ans.pos.push(i);
            ans.peaks.push(x);
        }else if(x > arr[i - 1]){
            for(let j = i + 1; j < arr.length; j++){
                if(arr[j] < arr[i]){
                    ans.pos.push(i);
                    ans.peaks.push(x);
                    break;
                }else if(arr[j] > arr[i]){
                    break;
                }
            }
        }
    })
    console.log(ans);
    return ans;
}

val = [1,2,2,2,1];
localMaxima(val)