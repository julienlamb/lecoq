$(document).ready(function () {
	//Gestion du texte des tailles de poulets
	$('#btnSaucisses').on('click', function (e) {
		$("#titreTaille").html('Saucisses de poulets aux Lentilles');
		$("#prixPlats").html('12€');
		$("#qtePlats").html(' les 800g');
		$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> Viande et peaux de poulet origine France (35%), lentilles vertes (31%), eau, oignon, carotte, vin blanc, huile de tournesol, sel de Guérande, persil, cognac, ail, poivre.');
		$('#imgPlat').attr('src','https://static.pingendo.com/img-placeholder-1.svg');
	});
	$('#btnMijote').on('click', function (e) {
		$("#titreTaille").html('Mijoté de poulets');
		$("#prixPlats").html('12€');
		$("#qtePlats").html(' les 800g');
		$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> Viande de poulet origine France (62%), eau, crême, champignon, cidre brut, oignon, beurre, farine de blé, bouillon de volaille, sel de Guérande, thym, poivre.');
		$('#imgPlat').attr('src','https://static.pingendo.com/img-placeholder-1.svg');
	});
});