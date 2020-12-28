//FUNCION DE SLIDE
$(function () {
  $(".rslides").responsiveSlides({
    nav: true,
    prevText: "<i class='fas fa-chevron-left'></i>",
    nextText: "<i class='fas fa-chevron-right'></i>",
  });
});

//FUNCION CARRUSEL
$(document).ready(function () {
  $('#carrusel').tinycarousel();
});


//FUNCION FLECHA SUBIR
$(document).ready(function () {
  $("#flecha").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });
});

//FUNCION PARA MENU RESPONSIVE
$("#menu").click(function () {
  $("#contenedormenu").toggleClass("abrirmenu");
}
);

//FUNCION PARA TABS
$("#btn1").addClass("activo");
$("#contenedor_tabs article").hide();
$("#op1").show();

$(".link").click(function () {
  $(".link").removeClass("activo");
  $(this).addClass("activo");
  $("#contenedor_tabs article").hide();
  var activar_tab = $(this).attr("href");
  $(activar_tab).show();
});

//FUNCION FANCYBOX
$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none",
  });
}); 

//FUNCION ACORDEON
$(".contenido_perfil").click(function(){
  var elemento = $(this);
  var otroelemento = elemento.next();
  otroelemento.slideToggle();
});

//FUNCION MODAL
var modal= document.getElementById("modal");
    var btn= document.getElementById("btnmodal");
    var cerrar= document.getElementById("cerrarmodal");

    btn.onclick= function(){
      modal.style.display="block";
    };
    cerrar.onclick= function(){
      modal.style.display="none";
    };
    window.onclick= function(event){
      if (event.target == modal) {
        modal.style.display= "none";
      }
    };