function set(){
    let st = new Set();
    let arr = [1,2,6,3,4,5,6];
    for(let i = 0; i < arr.length; i++){
        st.add(arr[i]);
    }
    return st;
}

console.log(set());
