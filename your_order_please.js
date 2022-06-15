const yop = (str) => {

    let arr = str.split(' ');

    if(!str.length){
        // console.log('');
        return '';
    }else if(arr.length === 1){
        // console.log(str);
        return str;
    }

    let i = 0;

    while(i < arr.length){

        if(arr[i].includes(String(i + 1))){
            // ans.push(arr[i]);
            // console.log("arr[i]: " + arr[i]);

            i++;
        }else{
            // console.log(typeof arr[i])
            // console.log("old: " + arr + "\t --- current: " + arr[i] + "\t --- i: " + i + "\t --- String(3): " + arr[i].indexOf('o'));
            let move = arr.splice(i, 1);
            arr.push(move[0]);
            // continue;
        }
    }

    // console.log("end: " + arr);
    return arr.join(' ');

}

// val = "4of Fo1r pe6ople g3ood th5e the2"
// val = ''
val = 'th2e first1'
yop(val);