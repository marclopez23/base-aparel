
var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function getEmail(){
  str= document.getElementById('email').value;
  console.log(str);
  if(str.match(pattern)){
    document.getElementById("fallo").style.display= "none";
    document.querySelector(".correo").style.borderColor = "hsl(0, 36%, 70%)";
    document.querySelector(".correo").style.color = "hsla(0, 36%, 70%, 0.5)";
  } else{
    document.getElementById("fallo").innerHTML = "Please provide a valid email";
    document.querySelector(".correo").style.borderColor = "hsl(0, 93%, 68%)";
    document.querySelector(".correo").style.color = "#000000";
  }

}
