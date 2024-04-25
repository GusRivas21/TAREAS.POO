<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sitio de rentas</title>
</head>
<body>
    <h2>sitio de rentas</h2>
    <table border="1">
    <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Clasificación</th>
        <th>Existencias</th>
        <th>modifica/eliminar</th>
    </tr>
    <?php
    include_once('datos.php');
    $conexion->conectar();
    $juegos = $gestion->select();
    // Supongamos que tienes un array llamado $filas con los datos de cada fila de tu base de datos
    // Itera sobre cada fila y muestra los datos en la tabla
    foreach ($juegos as $filas) {
        echo "<tr>";
        echo "<td>".$filas['id']."</td>";
        echo "<td>".$filas['nombre']."</td>";
        echo "<td>".$filas['clasificacion']."</td>";
        echo "<td>".$filas['existencias']."</td>";
        // Agregar las columnas de modificar y eliminar
        echo "<td>
            <a href='modificar.php?id=".$filas['id']."'>Modificar</a>
            <a href='datos.php?iddelete=".$filas['id']."&banderaE=3'>Eliminar</a>
        </td>";
        echo "</tr>";
    }
    ?>
    </table>


</body>
</html>