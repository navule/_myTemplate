/* ir a arriba */

$("#up").click( irArriba )

function irArriba(event)	{
	event.preventDefault()
	$("html,body").stop().animate( { scrollTop: "0" } , 1000 , "easeOutQuad" )
	
}


/* bajar a Contacto */

$(".bottom").click( irAbajo )

function irAbajo(event)	{
	
	event.preventDefault()
	$("html,body").stop().animate( { scrollTop: "10000" } , 1500 , "easeOutQuad" )
	
}


/* parallax con img*/

var caja = $(".desk , .dibujo , .notas , .letter , .videojuegos , .looki , .cale , .fractal , .kideco , .oleo , .foto , .branding") ;
var ventana = $(window) ;



ventana.scroll( moverConParallax ) ;


function moverConParallax()	{
	
	var scrolled = ventana.scrollTop() ;

	caja.css("background-position" , "0 " + (scrolled * 0.2 - 0 ) + "%" )

}


/* los #controls que aparezcan al bajar*/


$(window).scroll( apareceControls )


var visible = false 

function apareceControls()	{
	
	var scrolled = $(window).scrollTop()
	
	if( scrolled >= 260 )	{
		
		$("#controls").animate( { opacity: 1 } , 800 ) 
		
		if( !visible )	{
			$("#controls").fadeTo("slow" , 1)
			visible = true 
		}
	}
	else	{
		$("#controls").css("display" , "none" )
		
		if( visible )	{
			$("#controls").fadeTo("slow" , .8)
			visible = false 
		}
	}
}


/* la a de #plus para ver más etiquetas */

$("#allTag nav").click( openPanel )


var abrir = false
var allTag = $("#allTag")
var opener = $("#allTag nav")

function openPanel()	{
	

	
	if( !abrir )	{
		allTag.stop().animate({ height: "14em"} , 500 )
		opener.removeClass("plus").addClass("less")
		// ABIERTO. Se abre el panel.
		abrir = true 
	}
	else	{
		allTag.stop().animate({ height: "8.4em"} , 500 )
		opener.removeClass("less").addClass("plus")
		// CERRADO. Se cierra el panel.
		abrir = false 
	}
}


/* google analitycs */

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49826864-1', 'auto');
  ga('send', 'pageview');

/* ------------- */




