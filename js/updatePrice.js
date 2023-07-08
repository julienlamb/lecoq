$(document).ready(function () {

    $.getJSON('../json/price.json', function (data) {
        $('#1').val(data[0].price);
        $('#2').val(data[1].price);
        $('#3').val(data[2].price);
        $('#4').val(data[3].price);
        $('#5').val(data[4].price);
        $('#6').val(data[5].price);
        $('#7').val(data[6].price);
        $('#8').val(data[7].price);
        $('#9').val(data[8].price);

        $('#valider').on('click', function (e) {
            data[0].price = $('#1').val();
            data[1].price = $('#2').val();
            data[2].price = $('#3').val();
            data[3].price = $('#4').val();
            data[4].price = $('#5').val();
            data[5].price = $('#6').val();
            data[6].price = $('#7').val();
            data[7].price = $('#8').val();
            data[8].price = $('#9').val();

            //Ajax
            $.ajaxSetup({
                cache: false
            });
            $.ajax({
                type: 'POST',
                // chargement du fichier externe monfichier-ajax.php
                url: "../php/createJson.php",
                // Passage des données au fichier externe (ici le nom cliqué)
                data: { json: JSON.stringify(data) },
                dataType: "json",
                error: function (request, error) { // Info Debuggage si erreur
                    console.log("Erreur : responseText: " + error);
                    $('#valider').hide("slow");
                    $('#alerteKO').show("slow").delay(2000);
                    $('#alerteKO').hide("slow", function () {
                        $('#save').show("slow");
                    });
                },
                success: function (ajaxJson) {
                    // Informe l'utilisateur que l'opération est terminé et renvoie le résultat
                    $('#valider').hide("slow");
                    $('#alerteOK').show("slow").delay(2000);
                    $('#alerteOK').hide("slow", function () {
                        $('#save').show("slow");
                    });
                }
            });
        });
    });

});