
var musica=document.getElementById("musica");


//Música em loop
musica.addEventListener("ended", function(){ musica.currentTime = 0; musica.play(); }, false);
musica.play();


