function rangeExtraction (arr) {
    let left = arr[0], chunk = false;
    return (arr.map((x,i,a) => {

        if(!chunk && x + 1 === a[i + 1] && x + 2 === a[i + 2]){
            left = x;
            chunk = true;
        }
        
        if(!chunk && (x + 1 !== a[i + 1] || x - 1 !== a[i - 1])) return x

        if(chunk && x + 1 !== a[i + 1]){
            chunk = false;
            return(`${left}-${x}`)
        }
    }).filter(x => x === 0 ? "0" : x).join(",")
    )
}

const val = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
const val2 = [-10, -9, -8, -6, -4, -3, 0, 2]
rangeExtraction(val2);