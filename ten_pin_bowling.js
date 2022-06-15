function bowlingScore (str){
    const size = str.replace(/ /g,"").length;
    const endSpare = str.split(' ').pop().includes("/");
    const endStrike = str.split(' ').pop().includes("X");
    const end10 = (endSpare || endStrike)

    return str.replace(/ /g,"").split("").reduce((acc, x, i, a) => {

        if(i === size - 3 && end10){
            const lastFrame = str.split(' ').pop().split('').reduce((acc, x, i, a) => {
                return x === "X" ? (acc + 10) :
                x === "/" ? (acc + 10 - Number(a[i - 1])) :
                acc + Number(x)
            }, 0);
            return acc + lastFrame;
        }

        if(i > size - 3 && end10) return acc
        
        if(x === "/"){
            acc -= Number(a[i - 1]);
            return (a[i + 1] === "X") ? (acc + 20) : (acc + 10 + Number(a[i + 1]))
        }

        if(x === "X"){
            return (a[i + 1] + a[i + 2] === "XX") ? (acc + 30) : 
            (a[i + 2] === "/") ? (acc + 20) :
            (a[i + 1] === "X") ? (acc + 20 + Number(a[i + 2])) :
            acc + 10 + Number(a[i + 1]) + Number(a[i + 2])
        }

        return acc + Number(x);
    }, 0)
}


const val1 = '18 8/ 7/ 44 80 7/ 43 3/ 27 81'    // <- 107 (9 + 17 + 14 + 8 + 8 + 14 + 7 + 12 + 9 + 9)
const val2 = '18 24 70 44 80 90 33 11 63 81'    // <- 73
const val3 = '18 X 70 44 80 90 33 11 63 81'     // <- 84 (9 + 17 + 7 + 8 + 8 + 9 + 6 + 2 + 9 + 9)
const val4 = '18 X 72 4/ 80 X X 3/ X 81'        // <- 154 (9 + 19 + 9 + 18 + 8 + 23 + 20 + 20 + 19 + 9)
const val5 = '18 X X X 80 9/ X X 63 81'         // <- 176 (9 + 30 + 28 + 18 + 8 + 20 + 26 + 19 + 9 + 9)

const val6 = '18 X 72 4/ 80 X X 3/ X 8/1'       // <- 157 (9 + 19 + 9 + 18 + 8 + 23 + 20 + 20 + 20 + 11)
const val7 = 'X X X X X X X X X X8/'            // <- 288
const val8 = 'X X X X X X X X X XX8'            // <- 298
const val9 = 'X X X X X X X X X XXX'            // <- 300
const val10 = '18 X 72 4/ 80 X X 3/ X XXX'       // <- 186 (9 + 19 + 9 + 18 + 8 + 23 + 20 + 20 + 30 + 30)

bowlingScore(val10);