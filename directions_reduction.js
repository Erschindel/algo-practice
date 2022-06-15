const dirReduc = (arr) => {

    if(arr.length < 2){
        console.log("short: " + arr);
        return arr;
    }

    let switchArr = arr.map((x) => {
        switch (x.toLowerCase()){
            case "east":{
                return 1
            }case "west":{
                return -1
            }case "north":{
                return 2
            }case "south":{
                return -2
            }
        }
            
    })

    // console.log(switchArr);



    for(let i = 0; i < arr.length; i++){
        // console.log("test: " + (switchArr[i] + switchArr[i + 1]) + " = " + switchArr[i] + " + " + switchArr[i+1]);
        if(switchArr[i] + switchArr[i + 1] === 0){
            arr.splice(i,2);
            // console.log("arr: " + arr + ", length: " + arr.length);
            if(arr.length < 2){
                // return arr;
                break;
            }
            return dirReduc(arr);
        }
    
    }
    
    console.log("end: " + arr);
    return arr;

}

val = ['EAST', 'WEST', 'SOUTH', 'NORTH', 'NORTH', 'NORTH', 'NORTH', 'EAST', 'WEST', 'SOUTH', 'NORTH']
dirReduc(val);