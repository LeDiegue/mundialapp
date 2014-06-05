function createFixture() {

	var GrupoA = [];
	var option = document.getElementById("select");
	var option = option.value;
	

	switch (option){
		case "A":
			GrupoA[1] = "Brasil";
			GrupoA[2] = "Croacia";
			GrupoA[3] = "México";
			GrupoA[4] = "Camerún";
			break;
		case "B":
			GrupoA[1] = "asd";
			GrupoA[2] = "zxc";
			GrupoA[3] = "saco";
			GrupoA[4] = "wea";
			break;

	}
	$('.partido1').empty();
	$('.partido2').empty();
	$('.partido3').empty();
	$('.partido4').empty();
	$('.partido5').empty();
	$('.partido6').empty();
	
	$('.partido1').append('<span>' + GrupoA[1] + '</span> VS <span>' + GrupoA[2] + '</span>');	
	$('.partido2').append('<span>' + GrupoA[3] + '</span> VS <span>' + GrupoA[4] + '</span>');	
	$('.partido3').append('<span>' + GrupoA[1] + '</span> VS <span>' + GrupoA[3] + '</span>');	
	$('.partido4').append('<span>' + GrupoA[2] + '</span> VS <span>' + GrupoA[4] + '</span>');	
	$('.partido5').append('<span>' + GrupoA[4] + '</span> VS <span>' + GrupoA[1] + '</span>');	
	$('.partido6').append('<span>' + GrupoA[2] + '</span> VS <span>' + GrupoA[3] + '</span>');	
	

}
