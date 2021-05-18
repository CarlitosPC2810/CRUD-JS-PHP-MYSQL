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
}
