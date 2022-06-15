const myst_holes = (num) => {
    // 4,6,8,9,0
    let count = 0;
    for(let i of String(num).split("")){
        if(Number(i) === 8){count += 2}
        else if ([4,6,9,0].includes(Number(i))) count++
    }
    console.log(count);
    return count;

    // return num.split("").filter(() => {

    // });

}

let val = 3479283469;
myst_holes(val)