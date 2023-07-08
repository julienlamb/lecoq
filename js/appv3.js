$(document).ready(function () {
	$.getJSON('../json/price.json', function (data) {

        $("#titreTaille").html(data[1].name);
		$("#tarifPoulet").html(data[1].price + '/kg');
		$("#presentationTaille").html(data[1].details);
    
		//Gestion du texte des tailles de poulets
		$('#btnTailleP').on('click', function (e) {
			$("#titreTaille").html(data[0].name);
			$("#tarifPoulet").html(data[0].price + '/kg');
			$("#presentationTaille").html(data[0].details);
		});
		$('#btnTailleM').on('click', function (e) {
			$("#titreTaille").html(data[1].name);
			$("#tarifPoulet").html(data[1].price + '/kg');
			$("#presentationTaille").html(data[1].details);
		});
		$('#btnTailleG').on('click', function (e) {
			$("#titreTaille").html(data[2].name);
			$("#tarifPoulet").html(data[2].price + '/kg');
			$("#presentationTaille").html(data[2].details);
		});

    });
	
	
});