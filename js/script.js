$(document).ready(function (){
	$('#formulario').bootstrapValidator({
		feedbackIcons:{
			valid:'glyphicon glyphicon-ok',
			invalid:'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			name: {
				message: 'El nombre no es valido',
				validators: {
					notEmpty:{
						message: 'El usuario es obligatorio, no puede estar vacio.'
					}
				}
			},
			email: {
				validators: {
					notEmpty:{
						message: 'El e-mail es requerido no puede estar vacio.'
					},
					emailAddress: {
						message:'el e-mail no es válido.'
					}
				}
			},
			mensaje: {
				validators: {
					notEmpty: {
						message: 'El mesanje no puede estar vacio.'
					}
				}
			}
		}
	});
});