$(document).ready(function () {
	$.getJSON('../json/price.json', function (data) {
		$("#titreTaille").html(data[4].name);
		$("#prixRillette").html(data[4].price);
		$("#qteRillette").html(data[4].qte);
		$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> ' + data[4].details);
		$('#imgRillettes').attr('src',data[4].img);

	//Gestion du texte des tailles de poulets
		$('#btnPiment').on('click', function (e) {
			$("#titreTaille").html(data[5].name);
			$("#prixRillette").html(data[5].price);
			$("#qteRillette").html(data[5].qte);
			$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> ' + data[5].details);
			$('#imgRillettes').attr('src',data[5].img);
		});
		$('#btnNature').on('click', function (e) {
			$("#titreTaille").html(data[4].name);
			$("#prixRillette").html(data[4].price);
			$("#qteRillette").html(data[4].qte);
			$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> ' + data[4].details);
			$('#imgRillettes').attr('src',data[4].img);
		});
		$('#btnCitron').on('click', function (e) {
			$("#titreTaille").html(data[6].name);
			$("#prixRillette").html(data[6].price);
			$("#qteRillette").html(data[6].qte);
			$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> ' + data[6].details);
			$('#imgRillettes').attr('src',data[6].img);
		});
	});
});