<?php
    $servidor= "localhost:3308";
    $usuario = "root";
    $pass = "";
    $data_base = "registros_toc";

    $conexion = mysqli_connect($servidor, $usuario, $pass, $data_base);
    $conexion-> set_charset('utf8');    //Para que acepte caracteres especiales.

    if(!$conexion) {
        //echo ("Conexion fallida");
    }
    else {
        //echo "Conexion lista";
    }
?>