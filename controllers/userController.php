<?php
require_once '../models/userModel.php';
$data = json_decode(file_get_contents('php://input'), true);
$tipoPeticion = $data["tipoPeticion"];

if ($tipoPeticion == 'listarUsuarios') {
    echo json_encode(userModel::listarUsers());
} else if ($tipoPeticion == 'agregarUsuario') {
    echo json_encode(userModel::addUser($data['idUsuario'], $data['nombreUsuario'], $data['correoUsuario'], $data['EstatusUsuario']));
} else if ($tipoPeticion == 'eliminarUsuario'){
    echo json_encode(userModel::deleteUser($data['idUsuario']));
} else if($tipoPeticion == 'editarUsuario'){
    echo json_encode(userModel::updateUser($data['id'], $data['idUsuario'], $data['nombreUsuario'], $data['correoUsuario'], $data['statusUsuario']));
}
