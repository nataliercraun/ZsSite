document.querySelector("#blogLink").onclick = function() {
	console.log("clicked");
	this.style.transform = 'scale(1.2)';
	this.style.color = '#c1502e';

	document.querySelector("#map").style.display = "none"; 
	var photoPage = document.querySelector("#photoContainer");
	photoPage.style.display = "none";
	var blogPage = document.querySelector("#blogContainer"); 
	blogPage.style.display = "block"; 
	var home = document.querySelector("#homeLink"); 
	var photo = document.querySelector("#photoLink");

	home.style.transform = 'scale(1.0)'; 
	home.style.color = 'black';
	photo.style.transform = 'scale(1.0)'; 
	photo.style.color = 'black';
}; 

document.querySelector("#homeLink").onclick = function() {
	console.log("clicked");
	this.style.transform = 'scale(1.2)';
	this.style.color = '#c1502e';

	document.querySelector("#map").style.display = "flex"; 
	var photoPage = document.querySelector("#photoContainer");
	photoPage.style.display = "none"; 
	var blogPage = document.querySelector("#blogContainer"); 
	blogPage.style.display = "none"; 
	var blog = document.querySelector("#blogLink"); 
	var photo = document.querySelector("#photoLink");

	blog.style.transform = 'scale(1.0)'; 
	blog.style.color = 'black';
	photo.style.transform = 'scale(1.0)'; 
	photo.style.color = 'black';
}; 

document.querySelector("#photoLink").onclick = function() {
	console.log("clicked");
	this.style.transform = 'scale(1.2)';
	this.style.color = '#c1502e';

	document.querySelector("#map").style.display = "none"; 
	var blogPage = document.querySelector("#blogContainer"); 
	blogPage.style.display = "none"; 
	var photoPage = document.querySelector("#photoContainer");
	photoPage.style.display = "block"; 
	var home = document.querySelector("#homeLink"); 
	var blog = document.querySelector("#blogLink");

	home.style.transform = 'scale(1.0)'; 
	home.style.color = 'black';
	blog.style.transform = 'scale(1.0)'; 
	blog.style.color = 'black';
}; 

document.querySelector("#cardBtnOne").onclick = function() {
	console.log(this.innerHTML); 
	if (this.innerHTML != '-') {
		document.querySelector("#cardTextOne").style.height = '100%'; 
		this.innerHTML = '-';
	} else {
		document.querySelector("#cardTextOne").style.height = '20px'; 
		this.innerHTML = '+';
	}
}

document.querySelector("#cardBtnTwo").onclick = function() {
	if (this.innerHTML != '-') {
		document.querySelector("#cardTextTwo").style.height = '100%'; 
		this.innerHTML = '-';
	} else {
		document.querySelector("#cardTextTwo").style.height = '20px'; 
		this.innerHTML = '+';
	}
}

document.querySelector("#cardBtnThree").onclick = function() {
	if (this.innerHTML != '-') {
		document.querySelector("#cardTextThree").style.height = '100%'; 
		this.innerHTML = '-';
	} else {
		document.querySelector("#cardTextThree").style.height = '20px'; 
		this.innerHTML = '+';
	}
}











