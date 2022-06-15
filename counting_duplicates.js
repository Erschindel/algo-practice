const count_dups = (str) => {
    let count = 0, mem = {};
    for(let i of str.toLowerCase()) !mem[i] ? mem[i] = 1 : mem[i]++;
    for(let i in mem) if(mem[i] > 1) {count++};
    console.log(count);
    return count;
}

val = "abcdeFGHIhgfEDCBA";
count_dups(val);