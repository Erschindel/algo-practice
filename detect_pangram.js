const detectPangram = (str) => {
    if(str.length < 26) return false;
    let swap = str.toLowerCase().match(/\w/gm)[0];
    let adjustedStr = str.toLowerCase().trim().replace(/[^a-zA-Z]/gm, swap).split("").sort();
    // console.log(adjustedStr);

    let k = adjustedStr.filter((letter, i) => {
        // console.log(adjustedStr.indexOf(letter));
        // console.log(i);
        return (letter !== adjustedStr[i + 1]);
    });

    // console.log(k.length === 26);

    console.log (adjustedStr.filter((x, i) => {
        return (x !== adjustedStr[i + 1]);
    }).length === 26)
}

let val = "The quick brown fox jumps over the lazy dog."

detectPangram(val)