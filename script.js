var usuario = "jeanlucorrea@gmail.com";
var password = "jean2012";

function check_login(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(usuario == email && password == senha){
        document.location.href = "login.html";
    }
}