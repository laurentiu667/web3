
// ----------------- Exemple 1 -----------------
function toggleTexte() {
	if ($("#texteCache").css("display") == 'none') {
		$("#texteCache").fadeIn(2500);
	}
	else {
		$("#texteCache").fadeOut(1000);
	}
}



// ----------------- Exemple 2 -----------------

var isIn = true;
var menuActive = false;

function afficherMenu() {
	if (!menuActive) {
		$("#menu ul").slideDown("slow", function () { 	menuActive = true; });
	}
}

function cacherMenu() {
	if (!isIn && menuActive) {
		$("#menu ul").slideUp("slow", function () { 	menuActive = false; });
	}
}

function inSubMenu() {
	isIn = true;
}

function outSubMenu() {
	isIn = false;
	setTimeout(cacherMenu, 250);
}


// ----------------- Exemple 3 -----------------

var currentImg = 1;
var nextImg = 2;

function animateExample3() {
	
	$("#img" + currentImg).fadeOut(4000);
	$("#img" + (nextImg)).fadeIn(4000);
	
	currentImg++;
	nextImg++;
	
	if (currentImg == 3) {
		nextImg = 1;
	}
	
	if (currentImg == 4) {
		currentImg = 1;
	}
	
	setTimeout(animateExample3, 7000);
}


// ----------------- Exemple 4 -----------------

function animateExample4() {
	$("#ex4_img1").fadeIn(1500, function() { $("#ex4_img2").fadeIn(1500, function() { $("#ex4_img3").fadeIn(1500)}) });
}

function overImg(imgNumber) {
	$("#ex4_img" + imgNumber).fadeTo("fast", 0.4);
}

function outImg(imgNumber) {
	$("#ex4_img" + imgNumber).fadeTo("normal", 1);
}


// ----------------- Exemple 5 -----------------

var example5Counter = 0;

function animateExample5() {
	var id = "ex5" + example5Counter++;
	
	var text = "I like to move it move it";
	
	if (example5Counter == 4) {
		text = "I like to ...";
	}
	else if (example5Counter == 5) {
		text = "!!! MOVE IT !!!";
	}
	
	$('#containerExample5').append("<div id='" + id + "' style='text-align:center;width:600px;position:absolute;font-size:16px;'>" + text + "</div>");

	$('#' + id).animate(
		{
			fontSize: 	"55px",
			opacity:	0,
		}, 
		1500, 
		function() {
			// Animation complete.
		});
}








