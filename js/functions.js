$(document).ready(function(){
	$('.mov').on('click', function(){
		idA=$(this).data('id');
		id= '#' + idA;
		$('html, body').animate({scrollTop : $(id).offset().top},800);
	});
	
});

function soloLetras(x) { //Valido apellido y nombre con expresion regular//

	expr = /^([a-zA-Z]{3,50})*$/ ; //expresion regular de intervalos de letras min 4 caracteres max 50//
	if(expr.test(x)) {
		return true;
	}
	return false;
	} //Fin soloLetras //


/*	Funcion para mostrar contenido y ocultarlo
	$('.vermas').on('click', function(){
	var vid = $(this).data('id');
	var id= '#' + vid;
	//necesito preguntar si esta en none o en block
	console.log($(id).css('display'));
	if($(id).css('display') === 'none') {
		//oculto todos antes
		$('.extra').hide();
		//piso el ocultar todo con la especificidad
		$(id).css('display', 'block');
		console.log($(id).css('display')):
		}else{
		if($(id).css('display')==='block'){
			$(id).css('display', 'none');
			console.log($(id).css('display'));
		}
	}
	});

	$("#linkhome").on("click", function(){
		$("html,body").animate({ scrollTop : $("header").offset().top  }, 1000 );
	});
	$("#linkabout").on("click", function(){
		$("html,body").animate({ scrollTop : $("#about-me").offset().top  }, 1000 );
	});
	$("#linkproyecto").on("click", function(){
		$("html,body").animate({ scrollTop : $("#proyectos").offset().top  }, 1000 );
	});
	$("#linkmuestras").on("click", function(){
		$("html,body").animate({ scrollTop : $("#muestras").offset().top  }, 1000 );
	});
	$("#linkcontacto").on("click", function(){
		$("html,body").animate({ scrollTop : $("#contacto").offset().top  }, 1000 );
	});
	$("#linkhomebur").on("click", function(){
		$("html,body").animate({ scrollTop : $("header").offset().top  }, 1000 );
	});
	$("#linkaboutbur").on("click", function(){
		$("html,body").animate({ scrollTop : $("#about-me").offset().top  }, 1000 );
	});
	$("#linkproyectobur").on("click", function(){
		$("html,body").animate({ scrollTop : $("#proyectos").offset().top  }, 1000 );
	});
	$("#linkmuestrasbur").on("click", function(){
		$("html,body").animate({ scrollTop : $("#muestras").offset().top  }, 1000 );
	});
	$("#linkcontactobur").on("click", function(){
		$("html,body").animate({ scrollTop : $("#contacto").offset().top  }, 1000 );
	});*/
	
