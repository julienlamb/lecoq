$(document).ready(function () {
	//Gestion du texte des tailles de poulets
	$('#btnPiment').on('click', function (e) {
		$("#titreTaille").html('Rillettes piment d&#39;espelette');
		$("#prixRillette").html('3,50€');
		$("#qteRillette").html(' les 90g');
		$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> Viande et gras de poulet origine France (99%), sel de Guérande, poivre, piment d&#39;espelette.');
		$('#imgRillettes').attr('src','../assets/img/logo/rillette_piment.png');
	});
	$('#btnNature').on('click', function (e) {
		$("#titreTaille").html('Rillettes nature');
		$("#prixRillette").html('5,50€');
		$("#qteRillette").html(' les 180g');
		$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> Viande et gras de poulet origine France (99%), sel de Guérande, poivre.');
		$('#imgRillettes').attr('src','../assets/img/logo/rillettes.png');
	});
	$('#btnCitron').on('click', function (e) {
		$("#titreTaille").html('Rillettes citron et thyn');
		$("#prixRillette").html('3,50€');
		$("#qteRillette").html(' les 90g');
		$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> Viande et gras de poulet origine France (99%), sel de Guérande, poivre, citron et thyn.');
		$('#imgRillettes').attr('src','../assets/img/logo/rillette_citron.png');
	});
});