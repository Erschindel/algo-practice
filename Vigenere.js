// // Laurynn version

// function VigenèreCipher(key, abc) {
//     this.encode = function (str) {
//         return str.split('').map((x,i)=>{
//             if(abc.includes(x)){
//                 //find corresponding key letter's index in alphabet
//                 let kIdx = abc.indexOf(key[i]) + abc.indexOf(x);
//                 //wrap if necessary
//                 let newIdx = kIdx > abc.length ? kIdx-abc.length : kIdx;
//                 return abc[newIdx]
//             }
//             return x
//         }).join('')
//     }
//     this.decode = function (str) {
//         return str.split('').map((char,index)=>{
//         //find key index
//             let keyChar = key[index];  //p, a
//             //find key letter's index in alphabet
//             let keyIdx = abc.indexOf(keyChar)
//             let codedIdx = abc.indexOf(char)
//             //wrap if necessary
//             //console.log(Math.abs(keyIdx-codedIdx))
//             let finalIdx = keyIdx + codedIdx === 0 ? 0
//                 : (keyIdx + codedIdx <= abc.length) ? (abc.length - (Math.abs(codedIdx-keyIdx))) 
//                 : codedIdx - keyIdx;
//         return abc[finalIdx];
//         }).join('')
//     };
// }


function VigenèreCipher(key, abc) {

    this.encode = function (str) {
        let fullKey = ''
        while(fullKey.length < str.length){
            fullKey += key;
        }
        return str.split("").map((x, i) => {
            if(abc.includes(x)){
                let ans = abc.indexOf(fullKey[i]) + abc.indexOf(x)
                return ans < 26 ? abc[ans] : abc[ans - abc.length]
                // let ans = abc.charCodeAt(abc.indexOf(fullKey[i])) + abc.charCodeAt(abc.indexOf(x)) - 97
                // return ans < 123 ? String.fromCharCode(ans) : String.fromCharCode(ans - 26)
            }
            return x
        }).join('')
    };
    this.decode = function (str) {
        let fullKey = ''
        while(fullKey.length < str.length){
            fullKey += key;
        }
        return str.split("").map((x, i) => {
            if(abc.includes(x)){
                let ans = abc.indexOf(x) - abc.indexOf(fullKey[i])
                return ans >= 0 ? abc[ans] : abc[ans + abc.length]
                // let ans = abc.charCodeAt(abc.indexOf(fullKey[i])) + abc.charCodeAt(abc.indexOf(x)) - 97
                // return ans < 123 ? String.fromCharCode(ans) : String.fromCharCode(ans - 26)
            }
            return x
        }).join('')
    };
}

    
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"
c = new VigenèreCipher(key, abc);

// console.log(c.encode('codewars')) //'rovwsoiv');
console.log(c.decode('rovwsoiv') )// 'codewars');

// console.log(c.encode('waffles')) //'laxxhsj');
console.log(c.decode('laxxhsj')) // 'waffles');

console.log(c.encode('CODEWARS')) // 'CODEWARS');
// c.decode('CODEWARS') //'CODEWARS');
