const phoneNumber = (arr) => {
    console.log('(' + arr.slice(0,3).join('') + ') ' + arr.slice(3,6).join('') + '-' + arr.slice(6,10).join(''));
    return('(' + arr.slice(0,3).join('') + ') ' + arr.slice(3,6).join('') + '-' + arr.slice(6,10).join(''))
}

let val = [1,2,3,4,5,6,7,8,9,0];
phoneNumber(val)