$(document).ready(function(e) {
    $('#boton').on('click', function(){ 
        document.getElementById("content").style.height = "520px"; 
        document.getElementById("content").style.width = "720px"; 
        $('#content').attr('src', 'paginas/juego.html');        
        verificacion=false;
    }); 
    
});