
$(document).ready(function () {

    setCompoHtml();
});

function setCompoHtml() {
    //------------------------------------COMPOSITION--------------------------------------
    $('#connection').on('click', function (e) {
        $user = $('#user').val();
        $password = $('#password').val();
        if ($user != "" && $password != "") {
            e.preventDefault();
            getLogin($user, $password);
        }
    });
}

function getLogin($user, $password) {
    $.ajaxSetup({
        cache: false
    });
    $.ajax({
        type: 'POST',
        // chargement du fichier externe monfichier-ajax.php
        url: "../php/login.php",
        // Passage des données au fichier externe (ici le nom cliqué)
        data: { user: $user, password: $password },
        dataType: "json",
        error: function (request, error) { // Info Debuggage si erreur
            console.log("Erreur : responseText: " + error);
            $('#resultat').html('Une erreur est survenue');
        },
        success: function (data) {
            // Informe l'utilisateur que l'opération est terminé et renvoie le résultat
            //$json = JSON.parse(data);
            $result = data.result;
            if($result==true){
                window.location.replace("../pages/price.html");
            }else{
                $('#resultat').html(data.message);
            }
            
        }
    });
}