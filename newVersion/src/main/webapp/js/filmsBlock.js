let url =  `http://localhost:8082/dasd/films`;
let film;
(function() { 
	$.getJSON(url, (data) => {
		console.log(data);
	for (var i = 1; i < 8; i++){	
			document.getElementById('filmBlock').innerHTML += '<button id=' + data[i].id + ' class="films" onClick="filmClick()"><div id="filmn' + data[i].id +'"class="FilmName"></div></div><div id="im' + data[i].id +'" class="image"></div><div id="co' + data[i].id +'" class="CO"></div></button>'			
	}
	field = document.getElementsByClassName('films');
	});
})();

const createImageAsset = (path) => {
	let image = new Image();
	image.style.width = '100px';
	image.style.height = '100px';
	image.src = path;
	return image;
}

(function() {	
	$.getJSON(url, (data) => {
	for (var i = 1; i < 8; i++){
		document.getElementById('filmn' + data[i].id).innerHTML += data[i].name;
	}
	 });
})();

(function() {	
	$.getJSON(url, (data) => {
	for (var i = 1; i < 8; i++){
		document.getElementById('co' + data[i].id).innerHTML += data[i].sDescription;
	}
	 });
})();

(function() {	
	let a;
	$.getJSON(url, (data) => {
		for(var i = 1; i < 8; i++){
			document.getElementById('im' + data[i].id).appendChild(createImageAsset(data[i].image));			
		}
		
	 });
	
})();

function filmClick(e){

	
	film = `http://localhost:8082/dasd/films/`+ event.target.id + ``;
	if(film != null){
		document.cookie = "id" + "=" + event.target.id;
		document.location.assign('filmFolder.jsp');
	}
	
}


/*
$.getJSON(url, (data) => {
		//document.getElementById('pole').innerHTML += data[0].name;
  	//console.log(data);
 });
*/