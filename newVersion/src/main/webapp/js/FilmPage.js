let	film = `http://localhost:8082/dasd/films/`+ id + ``;
	


(function filmLoad(){
	
	alert("assdf");
	
	$.getJSON(film, (data) => {
		
			document.getElementById("crOpisValue2").innerHTML += data[i].sDescription;
			
			document.getElementById("YearValue2").innerHTML += data[i].date;
			
			document.getElementById("ResValue2").innerHTML += data[i].producer;
			
			document.getElementById("RaitingValue2").innerHTML += data[i].raiting;
			
			document.getElementById("RegionValue2").innerHTML += data[i].region;
			
			document.getElementById("PriceValue2").innerHTML += data[i].profit;
		
		 });
})();
