<?php
header('Content-type: application/json;charset=utf-8');
$retour = array();

if (isset($_POST['prenom']) && isset($_POST['nom']) && isset($_POST['rue']) && isset($_POST['codePostal']) && isset($_POST['ville']) && isset($_POST['telephone']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['details'])) {

    $mailDestination = 'info@volailles-lambert.fr';
    //$mailDestination = 'julienlambert29@gmail.com';
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $rue = $_POST['rue'];
    $codePostal = $_POST['codePostal'];
    $ville = $_POST['ville'];
    $telephone = $_POST['telephone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $details = $_POST['details'];
    $headers = array('From' => 'info@volailles-lambert.fr', 'Reply-To' => 'jeanne-travers@hotmail.fr');

    $messageClient = "Bonjour " . $prenom . " " . $nom . ",\n\n";

    $messageDetail = "Détails de la réservation :\n";
    $messageDetail .= $details;

    $messageDetailsClient = "\nCoordonnées du client :\n";
    $messageDetailsClient .= $rue;
    $messageDetailsClient .= "\n" . $codePostal . " " . $ville;
    $messageDetailsClient .= "\n" . $telephone;
    $messageDetailsClient .= "\n" . $email;

    $messageClient .= $messageDetail;

    $info = "\nInformation complémentaire :\n";
    $info .= $message;


    $messageClient .= $info . "\n";
    $messageClient .= "\nJe vous contacterai par téléphone ou e-mail pour confirmer la commande et sa date de retrait\n\nMickael Lambert\nLa Bilheudais\n35420 Louvigné du désert\n06.14.51.74.26\ninfo@volailles-lambert.fr";

    $messageDestination .= $messageDetail."\n";
    $messageDestination .= $info."\n";
    $messageDestination .= $messageDetailsClient;


    if (mail($mailDestination, "Réservation en ligne de " . $prenom . " " . $nom, $messageDestination, $headers)) {
        //message client
        mail($email, "Détails de votre réservation", $messageClient, $headers);
        $retour['message'] = 'Message envoyé';
        $retour['type'] = true;
    } else {
        $retour['message'] = "Erreur. Le message n'a pas été envoyé.";
        $retour['type'] = false;
    }
    echo json_encode($retour);
}
