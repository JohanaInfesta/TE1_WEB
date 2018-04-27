"use strict";

let btn = document.getElementById('btn-enviar');
let nombre = document.getElementsByClassName('form-nombre');
let comentario = document.getElementsByClassName('form-comentario');

btn.addEventListener("click",  function(info){
  VerificarComentario(nombre, comentario);
})

function VerificarComentario(name, coment){

  // if ((name)&&(coment)) {
    document.getElementsByClassName('foro-comentario').innerHTML = "<td>" + name + "</td>" ;
    document.getElementsByClassName('foro-comentario').innerHTML = "<td>" + coment + "</td>";
  // }
  // else{
  //   alert("Completar todos los campos");
  // }
  // console.log(name);
}


$.fn.imagesGrid.defaults.cells = 8;

$('#imgs').imagesGrid({
  images: [
    '../img/wallpaper1.jpg','../img/wallpaper2.jpg',
    '../img/wallpaper3.jpg','../img/wallpaper4.jpg',
    '../img/wallpaper5.jpg','../img/wallpaper6.jpg',
    '../img/death.jpg','../img/tokyo.jpg',
    '../img/yugioh.jpg','../img/onepice.jpg',
    '../img/rank7.jpg','../img/rank8.jpg',
    '../img/rank9.jpg','../img/rank10.jpg',
    '../img/masou.jpg','../img/dragonball.jpg',
    '../img/katekyo.jpg','../img/highschool.jpg',
    '../img/bleach.jpg','../img/theseven.jpg',] //poner imagenes// hasta 20 img //despues arreglo el css // las img q sean tipo wallpapers

  });
