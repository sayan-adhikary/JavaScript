let task = document.getElementById('item');
let input = document.querySelector('input')

let btn = document.querySelector('button');
let div = document.createElement('div');
let dlt = document.createElement('button');
dlt.setAttribute = "";

btn.addEventListener('click', ()=>{

    div.textContent = input.value;
    task.appendChild(div);
    dlt.textContent = "delete";
    task.appendChild(dlt);
    input.value = '';
})

dlt.addEventListener('click',(event)=>{
    if(event.match === b){
        return;
    }
})