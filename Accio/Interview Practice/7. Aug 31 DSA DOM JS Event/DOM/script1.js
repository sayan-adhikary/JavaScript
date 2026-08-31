let par = document.getElementById('par');

// par.addEventListener('mouseenter', (e)=>{
//     // enter inside the element area
//     console.log("Event occured");
//     console.log(e);
// })

// par.addEventListener('mouseleave', (e)=>{
//     console.log("Event Leave");
//     console.log(e);
// })

// par.addEventListener('mouseover', (e)=>{
//     // triggers for element and also for its children
//     console.log("over");
// })

// par.addEventListener('mouseout', (e)=>{
//     console.log('out');
// })

// par.addEventListener('mousemove', (e)=>{
//     // gets triggered when
//     // cursor is moved inside the element area
//     console.log("mover");
// })

par.addEventListener('mousedown', (e) => {
	console.log('mousedown');
});

par.addEventListener('mouseup', (e) => {
	console.log('mouseup');
});

par.addEventListener('click', (e) => {
	console.log('clicked');
});
