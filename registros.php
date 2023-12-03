<!DOCTYPE html>
<html>
<head>
<link href="../PAGCSS/registros.css" rel="stylesheet">
</head>
<body>
    <?php
        include("conec_db.php");

        if(isset($_POST['registro'])) {
            if( strlen($_POST['nombre']) >= 1 &&
                strlen($_POST['apellido']) >= 1 &&
                strlen($_POST['dni']) >= 1 &&
                strlen($_POST['email']) >= 1 &&
                strlen($_POST['fecha_nacimiento']) >= 1 &&
                strlen($_POST['telefono']) >= 1 &&
                strlen($_POST['pais']) >= 1 &&
                strlen($_POST['ciudad']) >= 1 &&
                strlen($_POST['direccion']) >= 1 &&
                strlen($_POST['codigo_postal']) >= 1) {

                    $nombre = $_POST['nombre'];
                    $apellido = $_POST['apellido'];
                    $dni = $_POST['dni'];
                    $email = $_POST['email'];
                    $fecha_nacimiento = $_POST['fecha_nacimiento'];
                    $telefono = $_POST['telefono'];
                    $pais = $_POST['pais'];
                    $ciudad = $_POST['ciudad'];
                    $direccion = $_POST['direccion'];
                    $codigo_postal = $_POST['codigo_postal'];

                    $consulta = "INSERT INTO socios(nombre, apellido, dni, email, fecha_nacimiento, telefono, pais, ciudad, direccion, codigo_postal) 
                    VALUES ('$nombre','$apellido','$dni','$email','$fecha_nacimiento','$telefono','$pais','$ciudad','$direccion','$codigo_postal')";
                    
                    $resultado = mysqli_query($conexion,$consulta);
                    if($resultado) {
                        ?>
                        <p class="success">¡Tu registro se ah completado!</p>
                        <?php
                    }
                    else {
                        ?>
                        <p class="error">¡Ah ocurrido un error!</p>
                        <?php
                    }
            }   
        } else {
            /*?>
            <p class="message">¡Llena todos los campos!</p>
            <?php*/
        }
    ?>
</body>
</html>