const uniqueNum = (arr) => {
    let filtered = arr.filter((x, i, a) => (x !== a[i - 1] && x !== a[i + 1]));
    if(filtered.length === 1) filtered[0];
    else if(filtered[0] !== arr[0] || filtered[0] !== arr[arr.length - 1]) filtered[0];
    else filtered[1];
}

let val = [3,3,3,3,3,1]
uniqueNum(val)

console.log(+[8])