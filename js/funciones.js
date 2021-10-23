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
let tabs = Array.prototype.slice.apply($('.link'));
let panels = Array.prototype.slice.apply($('.contenido_item'));
$('#tabs').click(e => {
  e.preventDefault();
  if (e.target.classList.contains('link')) {
    let i = tabs.indexOf(e.target);
    tabs.map(tab => tab.classList.remove('tab_activo'));
    tabs[i].classList.add('tab_activo');
    panels.map(panel => panel.classList.remove('tab_elemento_activo'));
    panels[i].classList.add('tab_elemento_activo');
  }
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
  let elemento = $(this);
  let otroelemento = elemento.next();
  otroelemento.slideToggle();
});