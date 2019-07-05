let state = {
	todo:[],
	inProgress:[],
	done:[]
}


let todos = document.getElementById('todos');



remove=()=>{
	console.log('hello')
}

showTodo = () => {
	console.log(state.todo)
}

add=()=>{

	let text = document.getElementById('inputText').value;
 	state.todo.push(text);
 	let inputText = state.todo;

	if(state.todo.length){
		var div = document.createElement('div')
		div.innerHTML;
		todos.appendChild(div);

		var p = document.createElement('p')
		p.innerHTML = text;
		div.appendChild(p);

		var remove = document.createElement('button')
		remove.innerHTML = "Delete";
		remove.onclick = function(){
			div.remove()
		}
		div.appendChild(remove)
	}
	console.log(state.todo)
	 document.getElementById('inputText').value = ''
}