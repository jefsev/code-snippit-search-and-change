window.onload = function() {
	var strO = document.querySelectorAll('.string');

	for (var i = 0; i < strO.length; i++) {
		var check = strO[i];	
		if (check.innerHTML.indexOf("Olyphia") !== -1){
			check.style.color = "#6bb24c";
		}
	};
};