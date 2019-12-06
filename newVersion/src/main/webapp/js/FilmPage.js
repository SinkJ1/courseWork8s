

let filmValue = document.cookie.split("=");
let	url = `http://localhost:8082/dasd/films/` + filmValue[1] + ``;
let blob;

const createImageAsset = (path) => {
	let image = new Image();
	image.src = path;
	return image;
}

(function filmLoad(){	
	$.getJSON(url, (data) => {
		
			document.getElementById("name2").innerHTML += data.name;
		
			document.getElementById("crOpisValue2").innerHTML += data.sDescription;
			
			document.getElementById("YearValue2").innerHTML += data.date;
			
			document.getElementById("ResValue2").innerHTML += data.producer;
			
			document.getElementById("RaitingValue2").innerHTML += data.raiting + '' + '\\10';
			
			document.getElementById("RegionValue2").innerHTML += data.region;
			
			document.getElementById("PriceValue2").innerHTML += data.profit;
			
			getImg(data.image);
			
			//alert(blob);
			
			document.getElementById("imgBorder2").appendChild(createImageAsset(data.image));
		
		 });
})();

function getImg(path){
var oReq = new XMLHttpRequest();
oReq.open("GET", path, true);
oReq.responseType = "blob";

oReq.onload = function(oEvent) {
  blob = oReq.response;
};

}