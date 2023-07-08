<?php
header('Content-type: application/json;charset=utf-8');
$retour = array();

if(isset($_POST['user']) && isset($_POST['password']))
{
    $user = $_POST['user'];
    $passwordUser = $_POST['password'];
    $loginJson = "../json/loginJson.json";
    $dataLoginJson = file_get_contents($loginJson);
    $decodeDataLoginJson = json_decode($dataLoginJson);

    $connection =false;
    foreach($decodeDataLoginJson as $data){
        $name = $data->name;
        $password = $data->password;
        $connecte=false;
        if(password_verify($user,$name) && password_verify($passwordUser,$password)){
        $connection=true;
        }
    }
    $message="";
    if($connection){   
        $retour['message'] = "Login et mot de passe correct";     
        $retour['login'] = $name;
        $retour['password']=$password;
        $retour['result']=true;
    }else
    {
        $retour['login'] = $name;
        $retour['password']=$password;
        $message = "Login ou mot de passe incorrect";
        $retour['message'] = $message;
        $retour['result']=false;
    }
    echo json_encode($retour);
}
?>