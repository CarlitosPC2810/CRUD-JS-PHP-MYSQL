<?php
require_once '../models/userModel.php';
$data = json_decode(file_get_contents('php://input'), true);
$tipoPeticion = $data["tipoPeticion"];

if ($tipoPeticion == 'listarUsuarios') {
    echo json_encode(userModel::listarUsers());
} else if ($tipoPeticion == 'agregarUsuario') {
    echo json_encode(userModel::addUser($data['idUsuario'], $data['nombreUsuario'], $data['correoUsuario'], $data['EstatusUsuario']));
}
