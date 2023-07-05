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

    // Création des détails de la réservation
    $detailsTab = explode('|',$details);
    $detailsReservation='';
    $htmlContentReservation = file_get_contents("../template/reservation.html");

    foreach($detailsTab as $detail){
        $produitQte = explode(':',$detail);
        $produit = $produitQte[0];
        $qte = $produitQte[1];
        $detailsReservation .= str_replace('{{produit}}', $produit, $htmlContentReservation);
        $detailsReservation = str_replace('{{qte}}', $qte, $detailsReservation);
    }


    // Set content-type header for sending HTML email 
    $headers = "MIME-Version: 1.0" . "\r\n"; 
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
 
    // Additional headers 
    $headers .= 'From: Volailles Lambert<'.$mailDestination.'>' . "\r\n"; 
    $headers .= 'Cc: jeanne-travers@hotmail.fr' . "\r\n"; 
    //$headers .= array('From' => 'info@volailles-lambert.fr', 'Reply-To' => 'jeanne-travers@hotmail.fr');

    $htmlContentClient = file_get_contents("../template/templateClient.html");

    $htmlContentClient = str_replace('{{prenom}}',$prenom,$htmlContentClient);
    $htmlContentClient = str_replace('{{nom}}',$nom,$htmlContentClient);
    $htmlContentClient = str_replace('{{commande}}',$detailsReservation,$htmlContentClient);
    $htmlContentClient = str_replace('{{messages}}',$message,$htmlContentClient);

    $htmlContentMickael = file_get_contents("../template/templateMickael.html");

    $htmlContentMickael = str_replace('{{prenom}}',$prenom,$htmlContentMickael);
    $htmlContentMickael = str_replace('{{nom}}',$nom,$htmlContentMickael);
    $htmlContentMickael = str_replace('{{commande}}',$detailsReservation,$htmlContentMickael);
    $htmlContentMickael = str_replace('{{rue}}',$rue,$htmlContentMickael);
    $htmlContentMickael = str_replace('{{codePostal}}',$codePostal,$htmlContentMickael);
    $htmlContentMickael = str_replace('{{ville}}',$ville,$htmlContentMickael);
    $htmlContentMickael = str_replace('{{telephone}}',$telephone,$htmlContentMickael);
    $htmlContentMickael = str_replace('{{mail}}',$email,$htmlContentMickael);
    $htmlContentMickael = str_replace('{{messages}}',$message,$htmlContentMickael);
    

    // Send email 
    if(mail($mailDestination, "Réservation en ligne de " . $prenom . " " . $nom, $htmlContentMickael, $headers)){ 
        $retour['message'] = 'Message envoyé';
        $retour['type'] = true; 
    }else{ 
        $retour['message'] = "Erreur. Le message n'a pas été envoyé.";
        $retour['type'] = false;
    }

    if(mail($email, "Détails de votre réservation " . $prenom . " " . $nom, $htmlContentClient, $headers)){ 
        $retour['message'] .= 'Message client envoyé';
        $retour['type'] = true; 
    }else{ 
        $retour['message'] .= "Erreur. Le message client n'a pas été envoyé.";
        $retour['type'] = false; 
    }
    
    echo json_encode($retour);
}
