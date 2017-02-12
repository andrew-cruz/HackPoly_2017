function sendToPage(){
  var input = document.getElementById("search").value;
  location.href = "mapSearch.html";
}

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	   zoom: 10,
	   center: new google.maps.LatLng(34.056528,-117.821529),
     mapTypeId: 'terrain'
   } )
};
