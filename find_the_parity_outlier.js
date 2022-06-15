function findOutlier(integers){
    //your code here
    
    let evenOrOdd = 0, temp = '';
    
    const check = (arr) => {
      (arr[0] % 2) ? temp += 'o' : temp += 'e';
      return arr.slice(1);
    }
    
    let confirm = check(integers);
    let doubleConf = check(confirm);
    check(doubleConf);

    if(temp.match(/e/g)){
        temp.match(/e/g).length > 1 ? evenOrOdd = 0 : evenOrOdd = 1
    }else{
        evenOrOdd = 1
    }

    for (let i of integers){
        if(Math.abs(i % 2) !== evenOrOdd) {
            console.log(i)
        };
    }
  }

findOutlier([8, 4, 2, 0]);