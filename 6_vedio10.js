// Vedio 10+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primittive) , Heap(Non-Primittive)

let myYoutubename = "SayanAdhikary"

let anothername = myYoutubename
anothername = "Adhikarysayan"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "sayan@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "adhikary@google.com"

console.log(userOne.email);
console.log(userTwo.email);         
/*same email will be  for   userOne and userTwo
because in heap userOne give the refrence to the usertwo*/
