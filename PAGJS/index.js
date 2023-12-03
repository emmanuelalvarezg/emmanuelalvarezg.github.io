/* CARRUSEL TESTIMONIOS */
var imagenes = [
                { ruta: "./imagenes/testimonio1.jpg", url: "https://youtu.be/qmFsnJ2zbBg?si=z62G3UmBXC586z8U"},
                { ruta: "./imagenes/testimonio2.jpg", url: "https://youtu.be/yEzmxyxzPG0?si=GY5LfvgcgMKdvAD-"},
                { ruta: "./imagenes/testimonio3.jpg", url: "https://youtu.be/cKO0oW_G_rw?si=xf7HhIkN4DvssdYd"},
                { ruta: "./imagenes/testimonio4.jpg", url: "https://youtu.be/iCcn7-Vu6ao?si=ax1ERL2cGNVy1i_B"},
                { ruta: "./imagenes/testimonio5.jpg", url: "https://youtu.be/cmsXchxo4B4?si=W6dX-TNFqJaicbpk"},
                { ruta: "./imagenes/testimonio6.jpg", url: "https://youtu.be/eCTpkpWa1Is?si=ZCY5yILhg42BOUkr"}
                ]; 
                
document.Imagen.src = imagenes[0].ruta;
document.getElementById('Linkel').href = imagenes[0].url;

var SliderDerecha = document.querySelector(".slider-der");
var SliderIzquierda = document.querySelector(".slider-izq");
var Contador = 0;

function MoverDerecha()
    {
        Contador++;
        if(Contador > imagenes.length - 1)
        {
            Contador = 0;
        }
        document.Imagen.src = imagenes[Contador].ruta;
        document.getElementById('Linkel').href=imagenes[Contador].url;
    }
SliderDerecha.addEventListener("click", MoverDerecha)
/*var Intervalo = setInterval(MoverDerecha, 5000);

SliderDerecha.addEventListener("click", function()
{
    clearInterval(Intervalo);
    MoverDerecha();
    Intervalo = setInterval(MoverDerecha, 5000);
})
*/
function MoverIzquierda()
    {
        Contador--;
        if(Contador < 0)
        {
            Contador = imagenes.length - 1;
        }
        document.Imagen.src = imagenes[Contador].ruta;
        document.getElementById('Linkel').href=imagenes[Contador].url;
    }
SliderIzquierda.addEventListener("click", MoverIzquierda)


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