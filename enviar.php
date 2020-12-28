<?php 

$destino ="andres-subzero@hotmail.com";
$asunto ="Cita realizada por medio de la pagina";
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$fecha = $_POST["fecha"];
$hora = $_POST["hora"];
$tipo_servicio = $_POST["tipo_servicio"];


$contenido = "
<b>Nombre :</b> " . $nombre . "<br><b>Apellido :</b> " . $apellido . "<br><b>Telefono :</b> " . $telefono  . "<br><b>Email :</b>" . $email . "<br><b>Fecha : </b> " . $fecha . "<br><b>Hora : </b> " . $hora . "<br><b>Tipo de servicio : </b> " . $tipo_servicio;
	
	// PARA QUE RECONOZCA LAS ETIQUETAS HTML

	$encabezados  = "MIME-Version: 1.0" . "\r\n";
	$encabezados .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// FUNCION MAIL Y REDIRECCIONAMIENTO
	mail($destino, $asunto, $contenido, $encabezados);
	header("Location: index.html");

 ?>