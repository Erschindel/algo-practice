const snail = (arr) => {
    let ans = [], remaining = arr.slice(), x = arr[0].length - 1, y = arr.length - 1;

    const right = (arr) => {
        for (let i of arr[0]) ans.push(i);
    }
    
    const down = (arr) => {
        for (let i of arr) ans.push(i[arr.length]);
    }

    const left = (arr) => {
        for (let i = arr[arr.length].length; i >= 0; i--) ans.push(i);
    }

    const up = (arr) => {
        for (let i of arr) ans.push(i);
    }

    return ans;
}

// r (check) dl (check) ur (check) ...

let val = [[1,2,3],[8,9,4],[7,6,5]];
snail(val);