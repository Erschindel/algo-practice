const sortOdd = (arr) => {
    let odds = [];
    let placeholder = arr.map(x => {
        if(x % 2) {
            odds.push(x);
            return "temp";
        }
        return x;
    });

    odds.sort((a, b) => a - b);

    return placeholder.map(x => {
        if(x === "temp"){
            let y = odds.shift();
            return y;
        }
        return x;
    })

}

val = [5, 3, 2, 8, 1, 4]
sortOdd(val);