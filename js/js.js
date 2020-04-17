
var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
function getEmail(){
  str= document.getElementById('email').value;

  if(str.match(pattern)){
    console.log("ok");
  } else{
    document.getElementById("fallo").innerHTML = "Please provide a valid email";
  }

}
