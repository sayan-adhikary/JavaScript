let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('#task-list');

let arr = [];
let taskId = 0;

// task - localstorage

console.log('Hello');

// localStorage.setItem("task", JSON.stringify(arr));

let savedTask = localStorage.getItem('task');
if (savedTask) {
	arr = JSON.parse(savedTask);
	taskId = localStorage.getItem('taskId') || 0;
	taskList.innerHTML = '';
	for (let x of arr) {
		taskList.appendChild(addTask(x));
	}
}

let input = document.querySelector('input');
let addBtn = document.querySelector('#add-btn');

function addTask(obj) {
	let newDiv = document.createElement('div');
	newDiv.style.display = 'flex';
	newDiv.style.justifyContent = 'center';
	newDiv.style.gap = '1rem';
	newDiv.id = obj.id;

	let box = document.createElement('input');
	box.classList.add('check');
	box.type = 'checkbox';
	box.checked = obj.checked ? true : false;

	let span = document.createElement('span');
	span.textContent = obj.task;
	span.style.width = 'inline-block';
	span.style.width = '5rem';
	span.style.padding = '0.3rem';
	span.style.backgroundColor = 'skyblue';

	let edit = document.createElement('button');
	edit.classList.add('edit-btn');
	edit.textContent = 'EDIT';

	let del = document.createElement('button');
	del.classList.add('del-btn');
	del.textContent = 'DEL';

	newDiv.appendChild(box);
	newDiv.appendChild(span);
	newDiv.appendChild(edit);
	newDiv.appendChild(del);

	return newDiv;
	// taskList.prepend(newDiv);

	console.log(newDiv);
}

taskInput.addEventListener('click', (e) => {
	let ele = e.target;
	if (ele.tagName == 'INPUT') {
		console.log('Inpput');
	} else if (ele.matches('#add-btn')) {
		let text = input.value;
		if (text == '') {
			return;
		}
		taskId++;

		localStorage.setItem('taskId', taskId);

		let obj = {
			id: taskId,
			task: text,
			checked: 0,
		};

		console.log(obj);

		arr.unshift(obj);
		console.log(arr);

		// addTask(obj);
		taskList.prepend(addTask(obj));

		localStorage.setItem('task', JSON.stringify(arr));

		input.value = '';
	}
});

taskList.addEventListener('click', (e) => {
	let ele = e.target;

	if (ele.matches('.check')) {
		let par = ele.parentElement;
		let id = Number(par.id);
		console.log(par);
		console.log(id);

		for (let x of arr) {
			if (x.id == id) {
				if (x.checked == 1) {
					x.checked = 0;
				} else {
					x.checked = 1;
				}
			}
		}
		console.log(ele.checked);

		arr.sort((a, b) => {
			return a.checked - b.checked;
		});

		localStorage.setItem('task', JSON.stringify(arr));
		taskList.innerHTML = '';
		for (let x of arr) {
			taskList.appendChild(addTask(x));
		}
	} else if (ele.matches('.edit-btn')) {
		let par = ele.parentElement;
		let id = Number(par.id);
		let text = par.children[1].textContent;
		par.remove();
		input.value = text;
		// delete from arra
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].id == id) {
				arr.splice(i, 1);
			}
		}

		taskList.innerHTML = '';
		for (let x of arr) {
			taskList.appendChild(addTask(x));
		}

		localStorage.setItem('task', JSON.stringify(arr));
	} else if (ele.matches('.del-btn')) {
		let par = ele.parentElement;
		let id = Number(par.id);
		let text = par.children[1].textContent;
		par.remove();
		// input.value = text;
		// delete from arra
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].id == id) {
				arr.splice(i, 1);
			}
		}

		taskList.innerHTML = '';
		for (let x of arr) {
			taskList.appendChild(addTask(x));
		}

		localStorage.setItem('task', JSON.stringify(arr));
	}
});
