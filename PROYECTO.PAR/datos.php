<?php
$bandera = isset($_POST['bandera'])? $_POST['bandera']:"";
$banderaE = isset($_GET['banderaE'])? $_GET['banderaE']:""; // bandera para eliminacion desde la
$nombre = isset($_POST['nombre']) ? $_POST['nombre']:"";
$clasificacion = isset($_POST['clasificacion']) ? $_POST['clasificacion']:"";
$existencias = isset($_POST['existencias']) ? $_POST['existencias']:"";
$ids = isset($_POST['id'])? $_POST['id']:""; // variable id para seleccionar los datos incrustados
$idd = isset($_GET['iddelete'])? $_GET['iddelete']:""; //id para eliminacion de parametros

include_once ('conf.php');

class juegos {
    public $conexion;
    public function __construct($conexion){
        $this->conexion = $conexion;
    }
    public function select(){
        $consultaSelect = "SELECT * FROM juegos";
        $ejecutar_consulta = $this->conexion->conexion->query($consultaSelect);
        return $ejecutar_consulta->fetch_all(MYSQLI_ASSOC);
    }

    public function insert($datos){
        $campos = implode(',', array_keys($datos));
        var_dump($campos);
        $valores = "'".implode("','", array_values($datos))."'";
        var_dump($valores);
        $consulta_insertar = "INSERT INTO juegos ($campos) VALUES ($valores)";
        var_dump($consulta_insertar);
        $resultado = $this->conexion->conexion->query($consulta_insertar);
        if ($resultado){
            return true;
        }else{
            $this->conexion->conexion->error;
        }
    }

    //metodo de seleccion para update
    public function selectupdate($id){
        $consultaSelect = "SELECT * FROM juegos WHERE id=$id";
        $ejecutar_consulta = $this->conexion->conexion->query($consultaSelect);
        return $ejecutar_consulta->fetch_all(MYSQLI_ASSOC);
    }
    //metodo update
    public function update($id, $datos){
        $set = [];
        foreach ($datos as $campo => $valor){
            $set[] = "$campo = '$valor'";
        }
        $set = implode(',', $set);
        $consulta_actualizar = "UPDATE juegos SET $set WHERE id = $id";
        $resultado = $this->conexion->conexion->query($consulta_actualizar);
        if($resultado){
            return true;
        }else{
            return $this->conexion->conexion->error;
        }
    }
    //metodo eliminacion
    public function delete($id){
        $consultadelete = "DELETE FROM juegos WHERE id=$id";
        $ejecutar_delete = $this->conexion->conexion->query($consultadelete);
        return $ejecutar_delete;
    }
}

$gestion = new juegos($conexion);
if($bandera == 1){
    $datosInsert = array('nombre' => $nombre, 'clasificacion' => $clasificacion, 'existencias' => $existencias);
    $conexion->conectar();
    $prueba = $gestion->insert($datosInsert);
    if($prueba){
        header('location:rentar.php');
    }
}else if ($bandera == 2){
    $id = $ids;
    $datosUpdate = array('nombre' => $nombre, 'clasificacion' => $clasificacion, 'existencias' => $existencias);
    $conexion->conectar();
    $prueba = $gestion->update($id, $datosUpdate);

    if ($prueba){
        header('location:rentar.php');
    }
}else if($banderaE == 3){ //bandera de eliminacion
    $conexion->conectar();
    $prueba = $gestion->delete($idd);
    if($prueba){
        header("location: rentar.php");
    }
}
?>