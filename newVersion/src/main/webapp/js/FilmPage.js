
let cc = document.cookie.split(";");
let filmValue;
let	url;

for(let i = 0; i < cc.length;i++){
	filmValue = cc[i].split("=");
	if(filmValue[0] === "id"){
		break;
	}
}

(function urlStart(){
		url = `http://localhost:8082/dasd/films/` + filmValue[1] + ``;	

})();

let postURL = `http://localhost:8082/dasd/films`;
let blob;
let disLikeURL = 'data:image/png;base64,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';
let LikeURL = 'data:image/jpeg;base64,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';	
let raiting = 0.0;
let film ={};

const createImageAsset = (path) => {
	let image = new Image();
	image.src = path;
	return image;
}

const createImageAssetWithNewResolution = (path) => {
	let image = new Image();
	image.style.width = '60px';
	image.style.height = '30px';
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
			
			raiting = data.raiting;
			
			document.getElementById("RegionValue2").innerHTML += data.region;
			
			document.getElementById("PriceValue2").innerHTML += parse(data.profit) + ' $';
			
			document.getElementById("imgBorder2").appendChild(createImageAsset(data.image));
		
			document.getElementById("like").appendChild(createImageAssetWithNewResolution(LikeURL));
			
			document.getElementById("dislike").appendChild(createImageAssetWithNewResolution(disLikeURL));
		 });
})();

function like(){
	if(raiting < 10){
		raiting +=0.1;		
	}

	$.getJSON(url, (data) => {
		data.raiting = raiting;
		post1(JSON.stringify(data));
	});
	changeBorder();
}

function dislike(){
	if(raiting > 0){
		raiting -=0.1;		
	}

	$.getJSON(url, (data) => {
		data.raiting = raiting;
		post1(JSON.stringify(data));
	});
	changeBorder();
}

function changeBorder(){
	event.target.style.border = '1.5px solid #0000FF';
	
}

function post1(json){
	var xhr = new XMLHttpRequest();
	xhr.open("PUT", `http://localhost:8082/dasd/films/`, true);
	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	xhr.send(json);
}


function parse(number){
    let newNUmber = '';
    let array;
    if(number.length % 2 === 1){
        alert();
        let a = 0 + '' + number;
        number = a;
        array = number.split('');
        for(i = 1; i < array.length;i++){
            if(i % 3 == 0){
                newNUmber +=' ';
                newNUmber += array[i];
            }else{
                newNUmber += array[i];
               }
        }    
    }else{
        number +='';
        array = number.split('');
        for(i = 0; i < array.length;i++){
            if(i % 3 == 0){
                newNUmber +=' ';
                newNUmber += array[i];
            }else{
                newNUmber += array[i];
               }
        }
    }
   return newNUmber;
}
