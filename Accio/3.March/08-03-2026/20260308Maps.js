// Maps and sets

let mp = new Map();

// add/insert/push into maps
mp.set(1,17);
mp.set("1",10);
mp.set("Rahul", "Chennai");

console.log(mp.size);


// access the elements
let a = mp.get("Rahul");
let b = mp.get(1);
let c = mp.get("1");

console.log(a,b,c);

// check the key is present or not
// has
if(mp.has("Shivam")){
    console.log("Shivam present");
}
else{
    console.log("Shivam Absent");
}

// delete
mp.delete("Rahul");

if(mp.has("Rahul")){
    console.log("Rahul Present");
}
else{
    console.log("Rahul Absent")
}


mp.set("Shivam", "Delhi");
mp.set("Sayan", "Bengal");
mp.set(4,5);
mp.set("Sayan", "chennai");
// iterate over my map
for(let [key, val] of mp){
    // console.log(key,val);
}

// want to make my map empty
mp.clear();
console.log("After clear");
for(let [key, val] of mp){
    console.log(key,val);
}


function learn(){
    let mp2 = new Map();
    for(let i=0; i<26; i++){
        let ch = String.fromCharCode(97+i);
        mp2.set(ch,i+1);
    }

    for(let [key,val] of mp2){
        console.log(key,val);
    }
}

// learn();



// update the value
mp.set()

function pairSum(arr,sum){
    let n = arr.length;
    let cnt=0;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i]+arr[j] === sum){
                cnt++;
            }
        }
    }
    return cnt;
}

/// ******* Set ********
console.log("starting set");
let st = new Set();

// add 
st.add(2);
st.add(5);
st.add(7);

console.log(st.size);

st.add(7);
console.log(st.size);


st.add("Rahul");

if(st.has("Rahul")){
    console.log("Present");
}
else{
    console.log("Absent");
}


if(st.has("Rohit")){
    console.log("Present");
}
else{
    console.log("Absent");
}

st.delete("Rahul");
console.log("After deleting rahul");
if(st.has("Rahul")){
    console.log("Present");
}
else{
    console.log("Absent");
}

for(let x of st){
    console.log(x);
}

st.clear();

console.log("After clear");
for(let x of st){
    console.log(x);
}

console.log("Cleared");

function ArraytoSet(arr){
    let n = arr.length;
    let s = new Set();
    for(let i=0; i<n; i++){
        s.add(arr[i]);
    }

    return s;
}

let arr = [4,2,7,1,4,9,0];

let s = ArraytoSet(arr);
console.log(s);
console.log(arr);

let s2 = new Set(arr); // short cut

// set to array
let arr2 = [...s2];

function intersection(arr1,arr2){
    let st1 = new Set(arr1);
    let st2 = new Set(arr2);

    let ans = [];
    for(let x of st1){
        if(st2.has(x)){
            ans.push(x);
        }
    }

    return ans;
}

function union(arr1,arr2){
    let st1 = new Set(arr1);
    for(let x of arr2){
        st1.add(x);
    }
    let ans = [...st1];
    return ans;
}

function prefixSum(arr){
    let n = arr.length;
    let sum = 0;
    let pre = [];
    for(let i=0; i<n; i++){
        sum = sum+arr[i];
        pre[i] = sum;
    }
    return pre;
}

let arr1 = [7,5,3,2,10,0,4];
arr2 = [5,10,7,1,8];

console.log(arr1);
console.log(arr2);

let ans = intersection(arr1,arr2);
ans = union(arr1,arr2);
console.log(ans);


