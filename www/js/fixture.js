function createFixture() {

	var Grupo = [];
	var option = document.getElementById("select");
	var option = option.value;
	

	switch (option){
		case "A":
			Grupo[1] = "Brasil";
			Grupo[2] = "Croacia";
			Grupo[3] = "México";
			Grupo[4] = "Camerún";
			break;
		case "B":
			Grupo[1] = "asd";
			Grupo[2] = "zxc";
			Grupo[3] = "saco";
			Grupo[4] = "wea";
			break;

	}
	$('.partido1').empty();
	$('.partido2').empty();
	$('.partido3').empty();
	$('.partido4').empty();
	$('.partido5').empty();
	$('.partido6').empty();
	
	$('.partido1').append('<span>' + Grupo[1] + '</span> VS <span>' + Grupo[2] + '</span>');	
	$('.partido2').append('<span>' + Grupo[3] + '</span> VS <span>' + Grupo[4] + '</span>');	
	$('.partido3').append('<span>' + Grupo[1] + '</span> VS <span>' + Grupo[3] + '</span>');	
	$('.partido4').append('<span>' + Grupo[2] + '</span> VS <span>' + Grupo[4] + '</span>');	
	$('.partido5').append('<span>' + Grupo[4] + '</span> VS <span>' + Grupo[1] + '</span>');	
	$('.partido6').append('<span>' + Grupo[2] + '</span> VS <span>' + Grupo[3] + '</span>');	
	

}
