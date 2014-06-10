function createFixture() {

	var Grupo = [];
	/*var option = document.getElementById("select");
	var option = option.value;
	Grupo[0] = option;*/

	for (var i = 1; i < 3; i++ ) {
		option = "A" + i;
		
	
		switch (option){
			case "A1":
				Grupo[1] = "Brasil";
				Grupo[2] = "Croacia";
				Grupo[3] = "México";
				Grupo[4] = "Camerún";
				break;
			case "A2":
				Grupo[1] = "asd";
				Grupo[2] = "zxc";
				Grupo[3] = "saco";
				Grupo[4] = "wea";
				break;

		}
		$('#fixture').append('<div class="A'+ i +'"></div>');
		$('.A'+ i +'').append('<h2>Grupo ' + i + '</h2>')
		$('#fixture').find('.A'+i).append(
			'<div class="team partido' + i + '"><span>' + Grupo[1] + '</span> VS <span>' + Grupo[2] + '</span></div>',
			'<div class="team partido' + i + '"><span>' + Grupo[3] + '</span> VS <span>' + Grupo[4] + '</span></div>',
			'<div class="team partido' + i + '"><span>' + Grupo[1] + '</span> VS <span>' + Grupo[3] + '</span></div>',
			'<div class="team partido' + i + '"><span>' + Grupo[2] + '</span> VS <span>' + Grupo[4] + '</span></div>',
			'<div class="team partido' + i + '"><span>' + Grupo[4] + '</span> VS <span>' + Grupo[1] + '</span></div>',
			'<div class="team partido' + i + '"><span>' + Grupo[2] + '</span> VS <span>' + Grupo[3] + '</span></div>'	
			);

		/*
		
		$('.partido1').append('<span>' + Grupo[1] + '</span> VS <span>' + Grupo[2] + '</span>');	
		$('.partido2').append('<span>' + Grupo[3] + '</span> VS <span>' + Grupo[4] + '</span>');	
		$('.partido3').append('<span>' + Grupo[1] + '</span> VS <span>' + Grupo[3] + '</span>');	
		$('.partido4').append('<span>' + Grupo[2] + '</span> VS <span>' + Grupo[4] + '</span>');	
		$('.partido5').append('<span>' + Grupo[4] + '</span> VS <span>' + Grupo[1] + '</span>');	
		$('.partido6').append('<span>' + Grupo[2] + '</span> VS <span>' + Grupo[3] + '</span>');*/
	}
}
