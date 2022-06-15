function sum (a, b){
    const arrA = a.split('').reverse(), arrB = b.split('').reverse();
    let plus1 = 0, ans;
    const shorter = arrA.length < arrB.length ? arrA : arrB
    const longer = arrA.length >= arrB.length ? arrA : arrB

    ans = shorter.map((x,i) => {
        let short = Number(x), long = Number(longer[i]), digit;
        if(short + long + plus1 > 9){
            digit = String(short + long + plus1 - 10);
            plus1 = 1;
            return digit;
        }else{
            digit = String(short + long + plus1);
            plus1 = 0;
        }
        return digit;
    })

    let remaining = longer.slice(shorter.length)

    if(!remaining[0] && plus1) ans.push(1)
    
    console.log(ans)

    remaining.forEach((x) => {
        if(plus1 && x === '9'){
            ans.push(0);
        }else if(plus1){
            ans.push(Number(x) + 1);
            plus1 = 0
        }else{
            ans.push(x)
        }
    })

    if(!Number(ans.join(""))) ans.push(1)
    
    console.log(`ans: ${(ans[ans.length - 1] !== '0') ? ans.reverse().join('') : ans.reverse().slice(1).join('')}`)

    return (ans[ans.length - 1] !== '0') ? ans.reverse().join('') : ans.reverse().slice(1).join('')
}

const val1 = ['63829983432984289347293874', '38498237058927340892374089']
const val2 = ['999999999', "1"];
// console.log(val1[0].length)
sum(...val2) // should be   91002328220491911630239667963