function subsequence(idx, tmp, ans, arr){
    if(idx === ans.length){
        console.log();
        return;
    }
    //exclude
    subsequence(idx + 1, tmp,ans,arr);
    tmp.pop();

    //include
    subsequence(idx + 1, tmp,ans,arr);
    tmp.push()
subsequence(idx + 1, tmp,ans,arr);
    

}