var errores = [];
$(document).ready(function(){
	$('.mov').on('click', function(event){
		event.preventDefault();
		id=$(this).data('id');
		$('html, body').animate({scrollTop : $(id).offset().top},800);
	});
	
	$('#enviar').on('click',function() {
		$('.mensaje').css('display', 'none');
		errores = [];
		var nombre = $('#nombre').val();
		 if (!soloLetras(nombre) || nombre == '') {
		 	errores ++;
		 	console.log('Error nombre');
		 } else {
		 	console.log('Nombre ok');
		 }
		 var apellido = $('#apellido').val();
		if (!soloLetras(apellido) || apellido == '') {
			errores ++;
			console.log('Error apellido');
		} else {
			console.log('apellido ok');
		}
		var mail = $('#mail').val();
		if (!mailCorrecto(mail) || mail == '') {
			errores ++;
		 	console.log('Error mail');
		} else {
			console.log('mail ok');
		}
		 var comment = $('#comment').val();
		if (comment == '') {
			errores ++;
		 	console.log('Error com');
		}else {
		 console.log('comment ok');
		}
		if (errores.length == 0) {
			var datos = $('#formulario').serialize();
			console.log(datos);
			$('#formulario')[0].reset();
			$('#error').css('display', 'none');
			$('#exito').css('display', 'block');
		} else {
			$('#error').css('display', 'block');
		}
	});
	$('#borrar').on('click',function() {
		$('.mensaje').css('display', 'none');
		console.log('hola reset');
		$('#formulario')[0].reset();
		errores = [];
	});

});

function soloLetras(x) { //Valido apellido y nombre con expresion regular//

	expr = /^([a-zA-Z]{3,50})*$/ ; //expresion regular de intervalos de letras min 4 caracteres max 50//
	if(expr.test(x)) {
		return true;
	}
	return false;
} //Fin soloLetras //

function mailCorrecto(x) {
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(expr.test(x)) {
		return true;
	}
	return false;
} // Fin mailCorrecto //
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
	});

	*/
	
