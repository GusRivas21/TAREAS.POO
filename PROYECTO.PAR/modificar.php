<?php
include_once('datos.php');
//aceptar pot el get en el id para el select que ocupa
$id = isset($_GET['id'])? $_GET['id']:"";

$conexion->conectar();

$juegos = $gestion->selectupdate($id);
foreach($juegos as $filas){
     // Verificar el stock y mostrar una alerta si es igual o inferior a 10
        if ($filas['existencias'] <= 10) {
        echo "<script>alert('¡Alerta! Stock bajo para ".$filas['nombre'].". Quedan ".$filas['existencias']." unidades.');</script>";
    }
    ?>
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<form action="datos.php" method="post">
    <label for="">Nombre</label> <br>
    <input type="text" name="bandera" value="2" hidden>
    <input type="text" name="id" id="" value="<?php echo $filas['id'];?>" hidden> <br>
    <input type="text" name="nombre" id="" value="<?php echo $filas['nombre'];?>">
    <label for="">clasificacion</label> <br>
    <input type="text" name="clasificacion" id="" value="<?php echo $filas['clasificacion'];?>"> <br>
    <label for="">existencias</label> <br>
    <input type="text" name="existencias" id="" value="<?php echo $filas['existencias'];?>"> <br><br>
    <input type="submit" value="Enviar">
</form>

<?php

}
?>
</body>
</html>

