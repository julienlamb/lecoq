$(document).ready(function () {
	//Gestion du texte des tailles de poulets
	$('#btnSaucisses').on('click', function (e) {
		$("#titreTaille").html('Saucisses de poulets aux Lentille');
		$("#prixPlats").html('');
		$("#qtePlats").html(' les ');
		$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> Viande et gras de poulet origine France (99%), sel de Guérande, poivre, lentilles, préparé avec mon savoir faire.');
		$('#imgPlat').attr('src','https://static.pingendo.com/img-placeholder-1.svg');
	});
	$('#btnMijote').on('click', function (e) {
		$("#titreTaille").html('Mijoté de poulets');
		$("#prixPlats").html('');
		$("#qtePlats").html(' les ');
		$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> Viande et gras de poulet origine France (99%), sel de Guérande, poivre, mijoté avec mon savoir faire.');
		$('#imgPlat').attr('src','https://static.pingendo.com/img-placeholder-1.svg');
	});
});