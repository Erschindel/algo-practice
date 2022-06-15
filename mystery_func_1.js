function solved(str){
    if(str.length < 3) return '';
    if(str.length % 2) {
        strArr = str.split('');
        strArr.splice(Math.floor(str.length / 2), 1);
        str = strArr.join('')
        console.log(str)
    }
    console.log(str.split('').sort().join(''));
    // console.log(str);
}

val = '   ? abcdAB..!';
solved(val);