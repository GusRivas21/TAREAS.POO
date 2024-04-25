<?php
session_start();

// Verificar si se ha enviado un formulario de inicio de sesión
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar si se proporcionó la edad
    if (isset($_POST['edad']) && $_POST['edad'] >= 18) {
        // Guardar la edad en la sesión
        $_SESSION['edad'] = $_POST['edad'];
        // Redirigir al usuario al archivo rentar
        header('Location: rentar.php');
        exit();
    } else {
        // Si la edad no es válida, mostrar un mensaje de error
        $error_message = "Debes ser mayor de 18 años para acceder a la tienda.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <title>Inicio</title>
</head>
<body>
    <h1>Verificar Edad</h1>
    <?php if (isset($error_message)) echo "<p style='color: red;'>$error_message</p>"; ?>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <label for="edad">Por favor, ingrese su edad:</label><br>
        <input type="number" id="edad" name="edad" required><br><br>
        <input type="submit" value="Seguir con la compra">
    </form>
</body>
</html>
