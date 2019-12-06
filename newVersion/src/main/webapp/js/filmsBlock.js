let url =  `http://localhost:8082/dasd/films`;
let film;
(function() { 
	$.getJSON(url, (data) => {
	for (var i = 1; i < 8; i++){	
			document.getElementById('filmBlock').innerHTML += '<button id=' + data[i].id + ' class="films" onClick="filmClick()"><div id="filmn' + data[i].id +'"class="FilmName"></div></div><div class="image"></div><div id="co' + data[i].id +'" class="CO"></div></button>'			
	}
	field = document.getElementsByClassName('films');
	});
})();

const createImageAsset = (path) => {
	let image = new Image();
	image.src = path;
	return image;
}

(function() {	
	$.getJSON(url, (data) => {
	for (var i = 1; i < 8; i++){
		document.getElementById('filmn' + i).innerHTML += data[data[i].id].name;
	}
	 });
})();

(function() {	
	$.getJSON(url, (data) => {
	for (var i = 1; i < 8; i++){
		document.getElementById('co' + i).innerHTML += data[data[i].id].sDescription;
	}
	 });
})();

(function() {	
	let a;
	$.getJSON(url, (data) => {
		for(var i = 1; i < 8; i++){
			document.getElementById("im").appendChild(createImageAsset(data[data[i].id].image));			
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