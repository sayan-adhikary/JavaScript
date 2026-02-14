function isVowel(word) {
    let vowel_word = "aeiouAEIOU";
    let v_count = 0, c_count = 0;
    for(let ele of word){
        if(vowel_word.includes(ele)){
            v_count++;
        } else{
            c_count++;
        }
    }
    return `Vowels: ${v_count}, Consonants: ${c_count}`
}

let str = "javascript";

console.log(isVowel(str));