$(document).ready(function () {
    $.ajaxSetup({
        cache: false
    });

    var cookieVide = setDetails();
    if(cookieVide==true){
        redirection();
    }

    $(function () {
        $('#btnReserver').click(function () {
            var $prenom = $("#prenom").val();
            var $nom = $("#nom").val();
            var $rue = $("#rue").val();
            var $codePostal = $("#codePostal").val();
            var $ville = $("#ville").val();
            var $telephone = $("#telephone").val();
            var $email = $("#email").val();
            var $message = $("#message").val();
            var $emailValid = validateEmail($email);
            var $phoneValid = validatePhone($telephone);
            if ($prenom === "") {
                setErreurModal('Le Prénom', ' est à saisir!');
            } else if ($nom === "") {
                setErreurModal('Le Nom', ' est à saisir!');
            } else if ($rue === "") {
                setErreurModal('Le Numéro et nom de rue', ' est à saisir!');
            } else if ($codePostal === "") {
                setErreurModal('Le Code postal', ' est à saisir!');
            } else if ($ville === "") {
                setErreurModal('La Ville', ' est à saisir!');
            } else if ($telephone === "") {
                setErreurModal('Le Téléphone', ' est à saisir!');
            } else if ($email === "") {
                setErreurModal("L'e-mail", ' est à saisir!');
            } else if ($emailValid == false) {
                setErreurModal("L'e-mail", ' est incorrect!');
            } else if ($phoneValid == false) {
                setErreurModal("Le numéro de téléphone", ' est incorrect!');
            }
            else {
                var $details = getDetailsForMail();
                $.ajax({
                    type: 'POST',
                    // chargement du fichier externe monfichier-ajax.php
                    url: "../php/sendMail.php",
                    // Passage des données au fichier externe (ici le nom cliqué)
                    data: { prenom: $prenom, nom: $nom, rue: $rue, codePostal: $codePostal, ville: $ville, email: $email, telephone: $telephone, message: $message, details: $details },
                    dataType: "json",
                    error: function (request, error) { // Info Debuggage si erreur
                        console.log(request + " " + error);
                        setErreurModal("Une erreur c'est produite.", '');
                    },
                    success: function (data) {
                        // Informe l'utilisateur que l'opération est terminé et renvoie le résultat
                        //$json = JSON.parse(data);
                        $type = data.type;
                        $('#envoyer').hide("slow");
                        if ($type) {
                            setErreurModalWithDelai("Un e-mail avec le détail de la commande va vous être envoyé à l'adresse " + $email + ".<br>Je vous recontacterai pour confirmer votre commande.<br>Vous allez être redirigé vers l'accueil", 'E-mail envoyé');
                            $.jCookie('cookieL', null, 7, { path: "/", secure: true });
                            setTimeout(redirection,10000);
                        } else {
                            setErreurModal("Une erreur c'est produite.", '<br>Vérifier votre adresse ' + $email);
                        }
                    }
                });
            }
        })
    });
});

function redirection(){
    window.location.replace("https://volailles-lambert.fr/index.html");
}

function getJsonCookie() {
    $.ajaxSetup({
        cache: false
    });
    var cookieJson = $.jCookie('cookieL');
    if (cookieJson !== undefined && cookieJson !== null) {
        return JSON.parse(cookieJson);
    }
}

function setDetails() {
    $.ajaxSetup({
        cache: false
    });
    //var json = getJon();
    var json = getJsonCookie();
    var cookieVide = true;
    if (json !== null) {
        var nbrElementJson = json.panier.length;
        for (var i = 0; i < nbrElementJson; i++) {
            if (json.panier[i] !== null) {
                $("#details").append('<p class="text-left">' + json.panier[i].produit + ' quantité : ' + json.panier[i].quantite);
                cookieVide= false;
            }
        }
    }
    return cookieVide;
}

function getJon() {
    var json = JSON.parse(JSON.stringify({ panier: [{ id: "Petitpoulet", produit: "Petit poulet", quantite: "2" }] }));
    console.log(json);
    json.panier.splice(json.length, 0, { id: "Pouletmoyen", produit: "Poulet moyen", quantite: "2" });
    json.panier.splice(json.length, 0, { id: "Grospoulet", produit: "Gros poulet", quantite: "2" });
    return json;
}

function setErreurModal(donnee1, donnee2) {
    $("#erreurSaisie").html(donnee1 + donnee2);
    $('#information').modal('show');
}

function setErreurModalWithDelai(donnee1, donnee2) {
    $("#erreurSaisie").html(donnee1);
    $("#titreModal").html(donnee2);
    $('#information').modal('show');
}

function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}

function validatePhone(phone) {
    var phoneReg = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
    return phoneReg.test(phone);
}

function getDetailsForMail() {
    $.ajaxSetup({
        cache: false
    });
    var $detail = '';
    var json = getJsonCookie();
    //var json = getJon();
    if (json !== null) {
        var nbrElementJson = json.panier.length;
        for (var i = 0; i < nbrElementJson; i++) {
            if (json.panier[i] !== null) {
                $detail += json.panier[i].produit + ' quantité : ' + json.panier[i].quantite + '\n';
            }
        }
    }
    return $detail;
}