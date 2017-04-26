var video1= document.getElementById("primerVideo");
video1.addEventListener("click", reproducirVideo1);

function reproducirVideo1(){
  var imagenVideo1= document.getElementById("imagenVideo1");
  imagenVideo1.style.display= "none";
  var video1= document.getElementById("video1");
  video1.style.display="inline-block";
}
