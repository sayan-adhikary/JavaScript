function accesndin(n){
    if(n === 0){
        return;
    } 
    accesndin(n - 1);
    console.log(n);
}
accesndin(7);