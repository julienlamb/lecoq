$(document).ready(function () {
	$.getJSON('../json/price.json', function (data) {
			$("#titreTaille").html(data[7].name);
			$("#prixPlats").html(data[7].price);
			$("#qtePlats").html(data[7].qte);
			$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> ' + data[7].details);
			$('#imgPlat').attr('src','https://static.pingendo.com/img-placeholder-1.svg');

		//Gestion du texte des tailles de poulets
		$('#btnSaucisses').on('click', function (e) {
			$("#titreTaille").html(data[7].name);
			$("#prixPlats").html(data[7].price);
			$("#qtePlats").html(data[7].qte);
			$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> ' + data[7].details);
			$('#imgPlat').attr('src','https://static.pingendo.com/img-placeholder-1.svg');
		});
		$('#btnMijote').on('click', function (e) {
			$("#titreTaille").html(data[8].name);
			$("#prixPlats").html(data[8].price);
			$("#qtePlats").html(data[8].qte);
			$("#presentationIngredients").html('<b class="font-weight-bold">Ingrédients :</b> ' + data[8].details);
			$('#imgPlat').attr('src','https://static.pingendo.com/img-placeholder-1.svg');
		});
	});
});