const whoLikesIt = (arr) => {
    // let ans = '';
    if(!arr.length){console.log("no one likes this")}

    if(arr.length === 1){
        console.log(arr[0] + " likes this");
    }
    
    if(arr.length === 2){
        console.log(arr[0] + " and " + arr[1] + " like this")
    }

    if(arr.length === 3){
        console.log(arr[0] + ", " + arr[1] + ", and " + arr[2] + " like this")
    }

    if(arr.length > 3){
        console.log(arr[0] + ", " + arr[1] + " and " + (arr.length - 2) + " others like this")
    }

    // console.log ans;
}

arr = [];
whoLikesIt(arr);