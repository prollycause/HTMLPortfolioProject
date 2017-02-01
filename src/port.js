
$("#droid").on('click', function(cb) {
	$("#droid").effect('shake');
});


// robot has to dance every 15 secs or we get bored.
function dance(newDance) {
	setInterval(function () {
		if( 3 > 2) {
			$("#droid").effect('shake');
		}
	}, 10000);

}

dance();