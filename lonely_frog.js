// const lonelyFrog = (target) => {

//     console.log("target: " + target);


//     let current = 0, jumpLength = 1;
//     target = Math.abs(target);

//     const check = () => {
//         if(current + jumpLength === target || current - jumpLength === target){
//             console.log("found: " + jumpLength);
//             return true;
//         }
//     }

//     const forwardJump = () => {
//         current += jumpLength;
//         jumpLength++;
//     }

//     if(0 === target){
//         console.log(0);
//         return 0;
//     }else if(1 === target){
//         console.log(1);
//         return 1;

//     }else if(2 === target){
//         console.log(3)
//         return 3;
//     }else if(4 === target){
//         console.log(3)
//         return 3;
//     }

//     while(current + jumpLength < target){
//         forwardJump();
        
//     }

//     if(check()){
//         return jumpLength;
//     }

//     console.log("jumpLength: " + jumpLength)
//     console.log("current: " + current)
//     console.log(Math.abs(current + jumpLength - target));
//     console.log(Math.abs(current - jumpLength - target));

//     if(Math.abs(current + jumpLength - target) < Math.abs(current - target)){ // should jump forwards, then f-b
//         forwardJump();
//         console.log("first " + jumpLength);
        
        
//         console.log((jumpLength + Math.abs(target - current) * 2) - 1);
//         return (jumpLength + Math.abs(target - current) * 2 - 1);
//     }else{
//         // backwardJump();
//         console.log("second");
//         console.log((jumpLength + Math.abs(target - current) * 2) - 1);
//         return (jumpLength + Math.abs(target - current) * 2 - 1);
//     }        
// }

const jumpTo =(n) => {
    let goal = Math.abs(n), count = 0;

    for (let position = 0; position < goal || (position - goal) % 2; count++, position += count) {
    // keeping this empty, just letting this run to count the times to get to goal
  }
  console.log(count);
  return count;
}


let val = 9;
jumpTo(val);

    // we can rule out half the answers! the first two jumps will be to odd numbers, then the next two to evens, etc
    // range === avg(jumpLength) * jumpLength, or jumpLength + (jumpLength - 1) + (jumpLength - 2) + ...
    // if target > range: move closer to target, next iteration;
    // else if target === range: return jumpLength;
    // 0,1,2,3,4,5,6,7,8,9,10 => 
    // 0,1,3,2,3,5,3,5,7,5,4

    // 5
    // 1,-1,2,-2,3,-3,4,-4,5 n 
    // 1,3,0,4,-1,5 n (odds, evens)
    // 1,3,6,10,5 y (more than one way to get there?)

    // 6
    // 1,3,6 y

    // 7
    // 1,3,6,2,7 y

    // 8
    // 1,3,6,2,7,1,8 y

    // 9
    // 1,3,6,10,15,9 N
    // 1,3,0,4,9 y

    // 22
    // 1,3,6,10, 15,21, 14,22 ?
    // 1,3,6,10, 

    // 58
    // 1,3,6,10,15,21,28,36, 45,55, 44,56,43,57,42,58 ?
    // 1,3,6,10,15,21,28,36, 45,55, 66, 

    // 59
    // 1,3,6,10,15,21,28,36,45,55, 



