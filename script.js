
let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let div = document.getElementById("secondColumn");
let li = document.getElementsByTagName("li");
let delBtn = document.getElementById("secondColumn").children;


function addListElement(){
	let li = document.createElement("li");
	 	li.appendChild(document.createTextNode(input.value));
	 	ul.appendChild(li);
	 	input.value ="";
/*	 	//for (let i =0; i < li.length; i++){
	 		//let li = document.getElementsByTagName("li");
			li[i].addEventListener("click", function(){
			// console.log("list clicking")
			li[i].classList.toggle("done");

})
//}*/

}
function addDeleteButton(){
		let btn = document.createElement("button");
	 	btn.appendChild(document.createTextNode("delete"));
	 	div.appendChild(btn);
	 	input.value ="";
}

function checkInputLength(){
	return ( input.value.length > 0);
}

function addListAfterClick(){
	 if(checkInputLength() == true){
	 	 addListElement();
	 	 addDeleteButton();
	 }
}

function addListAfterKeypress(e){
	if(checkInputLength() == true && e.keyCode == 13) {
		addListElement();
		addDeleteButton();
	}
	
}
 function clickButton(){
 	console.log("clicking");
 }

button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeypress);

/*for (let i =0; i < li.length; i++){
	let li = document.getElementsByTagName("li");
	li[i].addEventListener("click", function(){
	// console.log("list clicking")
	li[i].classList.toggle("done");
})
}*/
ul.onclick =function(evt){
	let target = evt.target;
	target.classList.toggle("done");

}
secondColumn.onclick = function(evt){
	let target = evt.target;
	let btn = document.getElementById("secondColumn").children;
	let li = document.getElementsByTagName("li");
	let arr = Array.from(btn);
	let index = arr.indexOf(target);
	li[index].classList.toggle("done");
}
/*secondColumn.addEventListener("click", function(evt){
	let target = evt.target;
	target.classList.toggle("bbcolor");

	})*/
/*for (let i =0; i < li.length; i++){
	let li = document.getElementsByTagName("li");
	let btn = document.getElementById("secondColumn").children;
	btn[i].addEventListener("click", function(){
	// console.log("list clicking")
	li[i].classList.toggle("done");
})
}*/