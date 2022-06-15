const calcWithFunctions = (func1, func2 = "+", func3 = 4) => {
    let numsObj = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }



    return((numsObj[func1] + numsObj[func3]))

}

calcWithFunctions(three())