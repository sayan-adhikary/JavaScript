let id = setInterval(() => {
    console.log("Sayan");
}, 1000);

setTimeout(()=>{
    console.log("Adhikary");
    clearInterval(id);
},1000);