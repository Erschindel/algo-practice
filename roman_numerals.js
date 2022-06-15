let RomanNumerals = class {

    // constructor(){
       
        fromRoman = function(val){
            let ans = 0;
    
            return ans;
        }
        helper = function(ans, val){

            return 
        }
    // }

}

RomanNumerals.prototype.toRoman = function(val){
    let ans = "";
    while(val){
        if(val >= 1000){
            ans += "M";
            val -= 1000;
            continue;
        }else if (val + 100 >= 1000){
            ans += "CM";
            val -= 900;
            continue;
        }
        if(val >= 500){
            ans += "D";
            val -= 500;
            continue;
        }else if (val + 100 >= 500){
            ans += "CD";
            val -= 400;
            continue;
        }
        if(val >= 100){
            ans += "C";
            val -= 100;
            continue;
        }else if (val + 10 >= 100){
            ans += "XC";
            val -= 90;
            continue;
        }
        if(val >= 50){
            ans += "L";
            val -= 50;
            continue;
        }else if (val + 10 >= 50){
            ans += "XL";
            val -= 40;
            continue;
        }
        if(val >= 10){
            ans += "X";
            val -= 10;
            continue;
        }else if (val + 1 >= 10){
            ans += "IX";
            val -= 9;
            continue;
        }
        if(val >= 5){
            ans += "V";
            val -= 5;
            continue;
        }else if (val + 1 >= 5){
            ans += "IV";
            val -= 4;
            continue;
        }
        ans += "I";
        val -= 1;
    }
    console.log(ans);
    return ans;
}



let val = 455;
console.dir(RomanNumerals.toRoman(val))
// let test = RomanNumerals();
// console.log(test)