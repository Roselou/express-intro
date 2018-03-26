console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	// code in here
	$.ajax({
	   method: 'GET',
	   url: 'http://localhost:3000/api/albums',
	   success: handleSuccess,
	   error: handleError
    });

 function handleSuccess(json) {

 	// for (var i =0; i<json.length; i++){
 	// 	console.log(json[i])
 	// 	var album = json[i]
 	// 	$('.container').append(`<p> ${album.title} - ${album.artist} </p>`)
 	// }}
 	json.forEach(function(eachAlbum){
 		console.log(eachAlbum);
   $('.container').append(`<p>${eachAlbum.title} ... ${eachAlbum.artist}</p>`)
	})
	 }

$.ajax({
	   method: 'GET',
	   url: 'http://localhost:3000/api/tacos',
	   success: handleTacos,
	   error: handleError
    });

 function handleTacos(json) {

 	// for (var i =0; i<json.length; i++){
 	// 	console.log(json[i])
 	// 	var album = json[i]
 	// 	$('.container').append(`<p> ${album.title} - ${album.artist} </p>`)
 	// }}
 	json.forEach(function(eachTaco){
 		console.log(eachTaco)
   $('.container').append(`<p>${eachTaco.name}</p>`)
   })
 }

 function handleError(xhr, status, errorThrown) {
 	debugger
   console.log('uh oh');
 }

});
