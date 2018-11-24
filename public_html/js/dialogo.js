window.status=1;
		
function next(_status) {
	var 
		box=document.getElementById('text-box');
	status=_status;
	switch(_status) {
		case 1:
			box.innerHTML='<span onclick="next(2)" class="clickable">¡ARGG! Bienvenido@ al dojo del pirata.<br>(pulsa para continuar)</span>';
		break;
		case 2:
			box.innerHTML='<span onclick="next(3)" class="clickable">Si quieres llegar a ser el rey de los piratas...</span>';
		break;
		case 3:
			box.innerHTML='<span onclick="next(4)" class="clickable">debes antes aprender algunas cosas.</span>';
		break;
		case 4:
			box.innerHTML='¿Cómo te consideras de habil en internet?<br><span onclick="next(6)" class="clickable  color-hover">GRUMETE</span> o <span onclick="next(5)" class="clickable color-hover">CAPITÁN</span>';
		break;
		case 5:
			box.innerHTML='<span onclick="window.location.href=\'https://procatinator.com/\';" class="clickable">¿Te consideras Capitán?<br>Pues imagino que ya no tengo nada que enseñarte...<br>¡Hasta luego, ARGGG!</span>';
		break;
		case 6:
			box.innerHTML='<span onclick="next(7)" class="clickable">¡ARRRGG! Así que eres un grumetillo traido por la corriente.</span>';
		break;
		case 7:
			box.innerHTML='<span onclick="next(8)" class="clickable">Pues no te preocupes, unas prácticas en el dojo te pondrán en forma...</span>';
		break;
		case 8:
			box.innerHTML='<span onclick="next(9)" class="clickable">Empezaremos por las presentaciones...</span>';
		break;
		case 9:
			box.innerHTML='<span onclick="next(10)" class="clickable">Tú, a partir de este momento te llamarás...</span>';
		break;
		case 10:
			box.innerHTML='<span onclick="next(11)" class="clickable">JIM</span>';
		break;
		case 11:
			box.innerHTML='<span onclick="next(12)" class="clickable">Me da igual que protestes.</span>';
		break;
		case 12:
			box.innerHTML='<span onclick="next(13)" class="clickable">Es el nombre propicio para un grumete como tu.</span>';
		break;
		case 13:
			box.innerHTML='<span onclick="next(14)" class="clickable">Y me da igual que seas un niñito u una niñita...</span>';
		break;
		case 14:
			box.innerHTML='<span onclick="next(15)" class="clickable">Unos meses en alta mar y entre la barba y el parche no se te distinguirá ni del vigia.</span>';
		break;
		case 15:
			box.innerHTML='<span onclick="next(16)" class="clickable">Y ahora... mi nombre...</span>';
		break;
		case 16:
			box.innerHTML='<span onclick="next(17)" class="clickable">¿Te acuerdas de cual era mi nombre?</span>';
		break;
		case 17:
			box.innerHTML='<input type="text" id="name-box" class="input-cartel"><br><span onclick="next(18)" class="clickable color-hover">OK</span>';
		break;
		case 18:
			(document.getElementById('name-box').value.toLowerCase()=="long john silver")?
				box.innerHTML='<span onclick="next(19)" class="clickable">¡ARRRG! Siii.</span>':
				box.innerHTML='<span onclick="next(1)" class="clickable">¡ARRRG! Nooo.</span>';
		break;
		case 19:
			box.innerHTML='Muy bien joven Jim ¿Listo para zarpar en busca de aventuras?<br><span onclick="next(20)" class="clickable color-hover">¡SIIII!</span>';
		break;
		case 20:
			box.innerHTML='<span onclick="window.location.href=\'cnt/list.html\';" class="clickable">¡ARRRRGGGG!<br>Zarpamos...</span>';
		break;
		default:
			box.innerHTML='<span onclick="next(2)" class="clickable">Hola ¡ARGG! bienvenido@ al dojo del pirata.<br>(pulsa para continuar)</span>';
	} 
}
