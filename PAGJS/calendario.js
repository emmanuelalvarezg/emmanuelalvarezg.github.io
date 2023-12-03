jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon');
        menu = $('.navegacion ul');
        main = $('.main');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
            main.css('padding-top', '7rem');
        }
        else {
            menu.addClass('show');
            main.css('padding-top', '16rem');
        }
    });
});

/* CARRUSEL FESTIVALES */
var imagenesfestivales = [
            { ruta: "./imagenes/menteytoc.jpg",   url: ""},
            { ruta: "./imagenes/festivaltoc.jpg",   url: "https://youtu.be/jcr0SNH2Hec?si=ut2VwH8Rh_YnTcSi"},
            { ruta: "./imagenes/festivaltoc2.jpg",  url: "https://youtu.be/3sWtvB17hoE?si=hxtVVVwTlsb9Uc0J"},
            { ruta: "./imagenes/festivalconciertotoc.jpg", url: "https://youtu.be/qo0_cE8uVyg?si=UQhszlMKsesWCBth"}
            ]; 
    
document.Imagen.src = imagenesfestivales[0].ruta;
document.getElementById('Linkel-festival').href = imagenesfestivales[0].url;

var Contador = 0;

function MoverDerecha()
{
    Contador++;
    if(Contador > imagenesfestivales.length - 1)
    {
    Contador = 0;
    }
    document.Imagen.src = imagenesfestivales[Contador].ruta;
    document.getElementById('Linkel-festival').href=imagenesfestivales[Contador].url;
}

var Intervalo = setInterval(MoverDerecha, 3000);

function MoverIzquierda()
{
    Contador--;
    if(Contador < 0)
    {
    Contador = imagenesfestivales.length - 1;
    }
    document.Imagen.src = imagenesfestivales[Contador].ruta;
    document.getElementById('Linkel-festival').href=imagenesfestivales[Contador].url;
}

/* CARRUSEL CONCIERTOS */
var imagenesconciertos = [
    { ruta: "./imagenes/conciertotoc1.jpg", url: "https://youtu.be/pcfQnRS1yGs?si=oP_mElM1o3TL3tnD"},
    { ruta: "./imagenes/conciertotoc2.jpg", url: "https://youtu.be/Bz9DSHAHIxM?si=uqxc3CsCINQLTk6i"},
    { ruta: "./imagenes/conciertotoc.jpg",  url: "https://youtu.be/AbTmPdjic90?si=3Cqh3zPPPDmA3RS1"}
    ]; 

document.Imagen2.src = imagenesconciertos[0].ruta;
document.getElementById('Linkel-concierto').href = imagenesconciertos[0].url;

var Contador2 = 0;

function MoverDerecha2()
{
    Contador2++;
    if(Contador2 > imagenesconciertos.length - 1)
    {
        Contador2 = 0;
    }
    document.Imagen2.src = imagenesconciertos[Contador2].ruta;
    document.getElementById('Linkel-concierto').href=imagenesconciertos[Contador2].url;
}

var Intervalo2 = setInterval(MoverDerecha2, 3000);

function MoverIzquierda2()
{
    Contador2--;
    if(Contador2 < 0)
    {
        Contador2 = imagenesconciertos.length - 1;
    }
    document.Imagen2.src = imagenesconciertos[Contador2].ruta;
    document.getElementById('Linkel-concierto').href=imagenesconciertos[Contador2].url;
}

/* CARRUSEL REUNIONES */
var imagenesreuniones = [
    { ruta: "./imagenes/asociacion2.jpg",   url: ""},
    { ruta: "./imagenes/reunion1.jpg", url: "https://youtu.be/I3xp-_YdR78"},
    { ruta: "./imagenes/reunion1.1.jpg", url: "https://youtu.be/DLDb_Vxo05U"},
    { ruta: "./imagenes/reunion1.2.jpg", url: "https://youtu.be/wi8kBWl_SOU"},
    { ruta: "./imagenes/reunion1.3.jpg", url: "https://youtu.be/AChPcJyzW6A"}
]; 

document.Imagen3.src = imagenesreuniones[0].ruta;
document.getElementById('Linkel-reuniones').href = imagenesreuniones[0].url;

var Contador3 = 0;

function MoverDerecha3()
{
    Contador3++;
    if(Contador3 > imagenesreuniones.length - 1)
    {
        Contador3 = 0;
    }
    document.Imagen3.src = imagenesreuniones[Contador3].ruta;
    document.getElementById('Linkel-reuniones').href=imagenesreuniones[Contador3].url;
}

var Intervalo3 = setInterval(MoverDerecha3, 3000);

function MoverIzquierda3()
{
    Contador3--;
    if(Contador3 < 0)
    {
        Contador3 = imagenesreuniones.length - 1;
    }
    document.Imagen3.src = imagenesreuniones[Contador3].ruta;
    document.getElementById('Linkel-reuniones').href=imagenesreuniones[Contador3].url;
}
