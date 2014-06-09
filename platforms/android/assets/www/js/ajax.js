function get_json (){
	
	$.getJSON('http://lediegue.com.ar/mundialapp/index.php', function(data) {
		$('#asd').empty();
		team = data;
		$.each(team, function(index, teams) {
			$('#asd').append('<p>' +  teams.team + '</p>');
		});
		
	});
}