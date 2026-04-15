let count = 0;
function countOne() {
    for (let i = 0; i < 5; i++) {
        for (let j = 1; j < 100; j *= 2) {
            count++;
        }
    }
    return count;
}
// console.log(countOne());    // 35

function countTwo(){
    for(let i = 2; i <= 6; i++){
        for(let j = 1; j < 100; j*=3){
            count++
        }
    }
    return count;
}
// console.log(countTwo());    // 25

function countThree(){
    for(let i = 0; i < 10; i += 2){
        for(let j = 100; j > 2 ; j/=2){
            count++;
        }
    }
    return count;
}
// console.log(countThree());  // 30

function countFour(){
    for(let i = 0; i < 5;i++){
        for(let j = 0;j<i;j++){
            count++;
        }
    }
    return count;
}
// console.log(countFour());   // 10

function countFive(){
    let n = 19;
    for(let i = 0 ; i < n;i++){
        for(let j = 0; j < i; j++){
            count++;
        }
    }
    return count;
}
// console.log(countFive());   // 171

function countSix(){
for(let i = 100;i>2;i/=2){
    for(let j = 0; j < i; j++){
        count++;
    }
}
return count;
}
// console.log(countSix());    // 199

function countSeven(){
    for(let i =0;i<100;i++){
        for(let j = i;j>2;j/=2){
            count++;
        }
    }
    return count;
}
// console.log(countSeven());  // 468
