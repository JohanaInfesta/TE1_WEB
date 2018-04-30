"use strict";
let arreglo_nombre =[];
let arreglo_comentario =[];

function Enviarr(){
  let valor_nombre = document.getElementById('form-nombre').value;
  let valor_comentario = document.getElementById('form-comentario').value;
  arreglo_nombre.push(valor_nombre);
  arreglo_comentario.push(valor_comentario);
  console.log(arreglo_nombre);
  Mostrar();
}

function Mostrar(){
  document.getElementById('foro-comentario').innerHTML = "<tr><td>" + arreglo_nombre + "</td>" + "<td>" + arreglo_comentario + "</td></tr>";
}

// let btn = document.getElementById('btn-enviar');
// let nombre = document.getElementById('form-nombre');
// let comentario = document.getElementById('form-comentario');
//
// btn.addEventListener("click",  function(info){
//   VerificarComentario(nombre, comentario);
// })
//
// function VerificarComentario(name, coment){
//
//    if ((name.value != "")&&(coment.value != "")) {
//
//     document.getElementById('foro-comentario').innerHTML = "<tr><td>" + name.value + "</td>" + "<td>" + coment.value + "</td></tr>";
//   }
//    else{
//     alert("Completar todos los campos");
//   }
//   // console.log(name);
// }


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
