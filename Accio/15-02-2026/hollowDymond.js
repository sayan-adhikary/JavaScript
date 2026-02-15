function hollowD(nums){
    for(let i = 0; i < nums; i++){
        let star = "";
        for(let j = nums; j < nums; j++){
            star += " ";
        }

        console.log(star);
    }
}
hollowD(5);