const pigIt = (str) => {
    let ans = [];
    for(let i of str.split(" ")){
        if(i.length <= 1 && i.match(/\W+/gm)){
            ans.push(i);
            continue;
        }

        let j = i[0] + "ay";

        if(i.match(/\W+/gm)){
            let k = i.match(/\W+/gm);
            j += k[0];
            i = i.replace(k[0], '');
        }
        
        ans.push(i.slice(1) + j);

    }

    console.log(ans.join(' '));
    return ans.join(' ');
}

let val = "Pig latin is a cool !"
pigIt(val)