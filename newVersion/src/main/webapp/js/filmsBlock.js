let url =  `http://localhost:8082/dasd/films`;
let film;
(function() { 
	$.getJSON(url, (data) => {
	for (var i = 1; i < 8; i++){
		document.getElementById('filmBlock').innerHTML += '<button id=' + i + ' class="films" onClick="filmClick()"><div id="filmn' + i +'"class="FilmName"></div></div><div class="image"></div><div id="co' + i +'" class="CO"></div></button>'
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
		document.getElementById('filmn' + i).innerHTML += data[i].name;
	}
	 });
})();

(function() {	
	$.getJSON(url, (data) => {
	for (var i = 1; i < 8; i++){
		document.getElementById('co' + i).innerHTML += data[i].sDescription;
	}
	 });
})();

(function() {	
	let a;
	$.getJSON(url, (data) => {
		document.getElementById("im").appendChild(createImageAsset(data[2].image));
		
	 });
	
})();

function filmClick(e){

	film = `http://localhost:8082/dasd/films/`+ event.target.id + ``;
	if(film != null){
		document.location.assign('filmFolder.jsp');
		window['id'] = event.target.id;
	}
	
}

function filmLoad(e){
	
	
	$.getJSON(film, (data) => {
		
			document.getElementById("crOpisValue2").innerHTML += data[i].sDescription;
			
			document.getElementById("YearValue2").innerHTML += data[i].date;
			
			document.getElementById("ResValue2").innerHTML += data[i].producer;
			
			document.getElementById("RaitingValue2").innerHTML += data[i].raiting;
			
			document.getElementById("RegionValue2").innerHTML += data[i].region;
			
			document.getElementById("PriceValue2").innerHTML += data[i].profit;
		
		 });
}


/*
$.getJSON(url, (data) => {
		//document.getElementById('pole').innerHTML += data[0].name;
  	//console.log(data);
 });
*/