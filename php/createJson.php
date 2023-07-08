<?php
header('Content-type: application/json;charset=utf-8');
$ajaxJson = $_POST['json'];

$retour = array();
$retour['json']=$ajaxJson;

$bite = file_put_contents("../json/price.json", $ajaxJson); 

echo json_encode($retour);
?>