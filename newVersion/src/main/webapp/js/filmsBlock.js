(function() { 
	for (var i = 1; i < 8; i++){
		document.getElementById('filmBlock').innerHTML += '<button id=' + i + ' class="films">sd<div class="image"></div></button>'
	}
	field = document.getElementsByClassName('films');
})();
/*var url =  `http://localhost:8081/qwerty/users`;


$.getJSON(url, (data) => {
		//document.getElementById('pole').innerHTML += data[0].name;
  	//console.log(data);
 });
*/