/* CARRUSEL CAUSAS */
var imagenes = [
    "./imagenes/cerebro.png",
    "./imagenes/obs.png",
    "./imagenes/obs2.png",
    "./imagenes/obs3.png",
    "./imagenes/investigaciontoc.png"
    ]; 
    
document.Imagentoc.src = imagenes[0];

var Contador = 0;

function MoverDerecha()
{
    Contador++;
    if(Contador > imagenes.length - 1)
    {
        Contador = 0;
    }
    document.Imagentoc.src = imagenes[Contador];
}

var Intervalo = setInterval(MoverDerecha, 3000);

function MoverIzquierda()
{
    Contador--;
    if(Contador < 0)
    {
        Contador = imagenes.length - 1;
    }
    document.Imagentoc.src = imagenes[Contador];
}

/* CARRUSEL TRATAMIENTO */
var imagenestra = [
    "./imagenes/medicamento.png",
    "./imagenes/psicoterapia.png"
    ]; 
    
document.Imagentratamiento.src = imagenestra[0];

var Contador2 = 0;

function MoverDerecha2()
{
    Contador2++;
    if(Contador2 > imagenestra.length - 1)
    {
        Contador2 = 0;
    }
    document.Imagentratamiento.src = imagenestra[Contador2];
}

var Intervalo2 = setInterval(MoverDerecha2, 2500);

function MoverIzquierda2()
{
    Contador2--;
    if(Contador2 < 0)
    {
        Contador = imagenestra.length - 1;
    }
    document.Imagentratamiento.src = imagenestra[Contador2];
}

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