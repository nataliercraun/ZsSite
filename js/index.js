document.querySelector("#blogLink").onclick = function() {
	console.log("clicked");
	this.style.transform = 'scale(1.2)';
	this.style.color = '#c1502e';

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

	var home = document.querySelector("#homeLink"); 
	var blog = document.querySelector("#blogLink");

	home.style.transform = 'scale(1.0)'; 
	home.style.color = 'black';
	blog.style.transform = 'scale(1.0)'; 
	blog.style.color = 'black';
}; 