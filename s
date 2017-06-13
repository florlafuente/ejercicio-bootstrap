efectos p/ interfaz de usuario

primero linkeo script jquery
primero linkeo script jqueryui

hay algunos elementos que al descargarlos tienen id, si quisiera

$('#iddroppeable').evento
$(this)

$('.classdroppeable').evento 
$(this)

$('.classdroppeable').evento
$(this)

Ejemplo: boton ver mas y desplegable, como tambien para los carritos de compras:
div oculto con display none y class extra y div con class 'vermas'
$('.vermas').on('click',function(){
	llamadaid= $(this).data('id'),
	id= '#' + llamadaid;
	$(id).show();
)};

habria que completar en el html
una opcion es poner un data-id igual para cada no de los dos divs a relacionar: oculto y el ver mas
data-id=1

al hacer la funcion primero hay que poner una funcion de ocultar todos los divs, por las dudas que 
alguno ya este visible, y despues visibilizar el que yo quiero.