$(document).ready(function () {
	$.getJSON('../json/price.json', function (data) {
        $("#titreTaillePintade").html(data[3].name);
		$("#tarifPintade").html(data[3].price + '/kg');
		$("#presentationTaillePintade").html(data[3].details);

    });
	
	
});