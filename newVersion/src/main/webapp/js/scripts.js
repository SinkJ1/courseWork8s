let step = 0;
let offset = 0;
let array = [];
let user;
let json;
let hello;

function getSlides(){
	let images = document.querySelectorAll('.slide-single');
	let slides = [];
	for(let i = 0;i < images.length;i++){
		slides[i] = images[i].src;
		images[i].remove();

	}
	slideArray(slides);
	inizialize(slides);
}

getSlides();

function slideArray(slides){
	array = slides;
}



function getArrray(){
	return array;
}

function inizialize(slides){
	for (;step <= 5; step++) {
		let img = document.createElement('img');
		img.src = getArrray()[step];
		img.classList.add('slide-singl');	
		img.style.float = "left";
		document.querySelector('#slideMenu').appendChild(img);
	}
}

function rigthInMenuSlider(e){
	let images = document.querySelectorAll('.slide-singl');

	images[0].remove();
	let span = document.getElementById("slideMenuButtonR");
	let img = document.createElement('img');
	img.src = getArrray()[step];
	img.classList.add('slide-singl');

	img.style.float = "left";
	document.querySelector('#slideMenu').appendChild(img);	
	if(step + 1 != array.length){
		step++;
	}else{
		step =0;
	}
	
}

function leftInMenuSlider(e){
	let images = document.querySelectorAll('.slide-singl');
	images[0].remove();
	let span = document.getElementById("slideMenuButtonR");
	let img = document.createElement('img');
	img.src = getArrray()[step-1];
	img.classList.add('slide-singl');
	//img.style.float = "right";
	document.querySelector('#slideMenu').appendChild(img);	
	if(step - 1 != 0){
		step--;
	}else{
		step = getArrray().length;
	}
	
}

function getA(){
	let a = document.getElementById('zatemnenie');
	return a;
}
let span;
function inPage(e) {
	let span = document.getElementById("btn-in");
	span.setAttribute("checked","checked");
	getA().style.display = "block";
}

function regPage(e) {
	let span = document.getElementById("btn-out");
	span.setAttribute("checked","checked");
	getA().style.display = "block";
	
}


function outRegPage(e) {
	registration();
	post(JSON.stringify(user));
	getA().style.display = "none";
	if(true){
		document.location.assign('index2.jsp');
	}
}

function outInPage(e){

	alert(inPut());
	getA().style.display = "none";
	document.location.assign('index2.jsp');
	
}

window.onclick = function (event) {
	
	if (event.target == document.getElementsByClassName("cross")[0]) {
		getA().style.display = "none";
	}

}

function registration(){
	user = {
	name :	 document.getElementById("login").value,
	eMail : document.getElementById("eMail").value,
	password : document.getElementById("password").value
	};
	document.cookie = "user_name" + "=" + user.name;
}

function inPut(){
	
	var users = 'http://localhost:8082/dasd/users';
	$.getJSON(users, (data) => {
		for (var i = 1; i < 8; i++){
			if(data[i].name == document.getElementById("input_login") && data[i].password == document.getElementById("psw")){
				filmSerachClick(data[i].id);
				document.cookie = "user_name" + "=" + data[i].name;
				return true;
			}
		}
		 });
	return false;
}

function post(json){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://localhost:8082/dasd/users', true);
	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	xhr.send(json);
}

function exitButton(){
	document.location.assign('index.jsp');
}

                    
function playPause() { 
	var myVideo = document.getElementById("Player"); 
	if (myVideo.paused){
		myVideo.play(); 
	}else{
		myVideo.pause(); 
	}
} 

function search(){
	let name  = `` + document.getElementById("search").value + ``;
		$.getJSON(`http://localhost:8082/dasd/films`, (data) => {
		for (var i = 1; i < 8; i++){
			if(data[i].name == name){
				filmSerachClick(data[i].id);
			}
		}
		 });
}

function filmSerachClick(id){

	let film = `http://localhost:8082/dasd/films/`+ id + ``;
	if(film != null){
		document.cookie = "id" + "=" + id;
		document.location.assign('filmFolder.jsp');
	}
	
}
