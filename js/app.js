$(document).ready(function () {
	//Gestion du texte des tailles de poulets
	$('#btnTailleP').on('click', function (e) {
		$("#titreTaille").html('Petit poulet');
		$("#tarifPoulet").html('7,00€/kg');
		$("#presentationTaille").html('2/4 personnes - 1,6 kg à 2 kg');
	});
	$('#btnTailleM').on('click', function (e) {
		$("#titreTaille").html('Poulet moyen');
		$("#tarifPoulet").html('7,00€/kg');
		$("#presentationTaille").html('4/7 personnes - 2,1 kg à 2,7 kg');
	});
	$('#btnTailleG').on('click', function (e) {
		$("#titreTaille").html('Gros poulet');
		$("#tarifPoulet").html('7,00€/kg');
		$("#presentationTaille").html('8 personnes et + - 2,8 kg et +');
	});
});