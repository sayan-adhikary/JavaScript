/*  your css code here. If applicable */
let ele = document.getElementById('level');
let cnt = 0;
while(ele){
	ele = ele.parentElement;
	cnt++;
}
alert(`The level of the element is: ${cnt}`);
