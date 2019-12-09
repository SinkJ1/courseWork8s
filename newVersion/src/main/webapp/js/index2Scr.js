let cc = document.cookie.split(";");
let filmValue;
for(let i = 0; i < cc.length;i++){
	filmValue = cc[i].split("=");
	if(filmValue[0] === "user_name"){
		urlStart(filmValue[1]);
		break;
	}
}

function urlStart(value){
	document.getElementById("nameLabel").innerHTML += value;
}
