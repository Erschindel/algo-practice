const bouncingBalls = (h, bounce, window = 1.5) => {
    let count = 0;
    if(bounce === 1) return -1;
    if(h > window) count++;
    while (h * bounce > window){
        count += 2;
        h *= bounce;
    }
    if(h * bounce === window) count++;
    console.log(count);
    return count;
}

let h = 30, bounce = .66, window = 1.5;
bouncingBalls(h, bounce, window);