// creating the function 


function mylist(){
	var todolist=document.getElementById("todolist").value
	var text=document.createTextNode(todolist)
	var litag=document.createElement("li")
	litag.appendChild(text)
	document.getElementById('list').appendChild(litag)

}