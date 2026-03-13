function hash_pattern(nums) {
    for (let i = 1; i <= nums; i++) {     //rows
        let hash = "";
        for (let j = 1; j <= nums - i; j++) {     //space
            hash += " ";
        }

        for (let j = 1; j <= i; j++) {    //#
            hash += "#";
        }
        console.log(hash);

    }
}

hash_pattern(5);