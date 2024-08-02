
function encriptar(){

    var mensajes= document.getElementById("TextEncriptado").value.toLowerCase();

    var TextEncriptado= mensajes.replace(/e/img, "enter");
    var TextEncriptado= TextEncriptado.replace(/i/img, "imes");
    var TextEncriptado= TextEncriptado.replace(/o/img, "over");
    var TextEncriptado= TextEncriptado.replace(/a/img, "ai");
    var TextEncriptado= TextEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML=TextEncriptado;
    document.getElementById("botonCopiar").style.display="show";
    document.getElementById("botonCopiar").style.display="inherit";
    alert("encriptando")

}

function desencriptar(){
    alert("Desencriptando");
    var mensaje=document.getElementById("TextEncriptado").value.toLowerCase();

    var TextEncriptado=mensaje.replace(/enter/img, "e");
    var TextEncriptado=TextEncriptado.replace(/imes/img, "i");
    var TextEncriptado=TextEncriptado.replace(/over/img, "o");
    var TextEncriptado=TextEncriptado.replace(/ufat/img, "u");
    var TextEncriptado=TextEncriptado.replace(/ai/img, "a");

    document.getElementById("textoDesencriptado").innerHTML=TextEncriptado;
}

function Copia(){
    var contenido= document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    alert("Copiado");
}


