<?php
require_once 'connectionModel.php';
class userModel
{
    public static function listarUsers()
    {
        try {
            $users = "SELECT *FROM tabla_users";
            $stmt = Connection::connect()->prepare($users);
            if ($stmt->execute()) {
                $contador = $stmt->rowCount();
                if ($contador > 0) {
                    return ["success", $stmt->fetchAll()];
                } else {
                    return ["warning", "No hay usuarios existentes"];
                }
            } else {
                return ["error", "Error al ejecutar consulta"];
            }
        } catch (Exception $e) {
            return ["error", "ERROR SQL $e"];
        }
    }

    public static function addUser($idUsuario, $nombreUsuario, $correoUsuario, $estatusUsuario)
    {
        try {
            $Validar = "SELECT *FROM tabla_users WHERE id_usuario = $idUsuario";
            $stmt = Connection::connect()->prepare($Validar);
            $stmt->execute();
            $con = $stmt->rowCount();
            if ($con != 0) {
                return ["error", "Ya existe un registro con ese id !"];
            } else {
                $addUser =
                    "INSERT INTO tabla_users
                    (
                        id_usuario,
                        nombre_usuario,
                        correo,
                        `status`
                    )
                    VALUES
                    (
                        '$idUsuario',
                        '$nombreUsuario',
                        '$correoUsuario',
                        '$estatusUsuario'
                    )";

                $stmt = Connection::connect()->prepare($addUser);
                if($stmt->execute()){
                    return ["success", "Usuario registrado !"];
                }else{
                    return ["error", "Imposible realizar registro !"];
                }
            }
        } catch (\Exception $e) {
            return ["warning", "Error SQL $e"];
        }
    }
}
