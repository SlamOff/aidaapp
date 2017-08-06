<?php
$method = $_SERVER['REQUEST_METHOD'];
$c = true;
if ( $method == 'POST' ) {
	$project_name = $_POST["project_name"];
	$admin_email  = $_POST["admin_email"];
	$name = $_POST["name"];
	$phone = $_POST["phone"];
	$email = $_POST["email"];
	$mess = $_POST["message"];
	
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($email))) {
	echo '';
} else {
	$msg="ФОРМА: Заявка с сайта
		Имя: $name
		E-mail: $email 
		Телефон: $phone
		Сообщение: $mess";
}
mail("$admin_email", "Сообщение 
от $name", "$msg"); 

$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Сообщение от $name"); 
 
fwrite($f,"\n $msg "); 
 
fwrite($f,"\n ---------------"); 
 
fclose($f);

//echo '<meta http-equiv="refresh" content="0; url=thanks.html" />';
}
?>