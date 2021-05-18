<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php require_once 'components/css.php'; ?>
    <title>Usuarios</title>
</head>

<body>
    <!-- NABVAR -->
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
        </a>
        <a href="" class="navbar-brand">
            <i class="fas fa-user">Bienvenidos</i>
        </a>
        <i class="fas fa-user-plus"><a href="" class="navbar-brand" data-toggle="modal" data-target="#exampleModal" id="btnAgregarUsuario">Agregar Usuario</a></i>
        <a href="" class="navbar-brand">
            <i class="fas fa-sign-out-alt">Cerrar Sesión</i>
        </a>
    </nav>
    <!-- MAIN -->
    <div>
        <div class="container-fluid m-0">
            <div class="row">
                <div class="col-12 text-center mt-5">
                    <h5>REGISTRO DE USUARIOS</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div id="Usuarios"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- MODAL -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="tituloModalUsuarios"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid m-0">
                        <form class="needs-validation" novalidate id="formUsuarios">
                            <div class="form-row">
                                <input type="hidden" id="txtid">
                                <div class="col-md-3 mb-3">
                                    <label for="txtIdUsuario">#</label>
                                    <input type="number" class="form-control" id="txtIdUsuario" placeholder="#" required>
                                    <div class="valid-feedback">
                                        numero no valido !
                                    </div>
                                    <div class="invalid-feedback">
                                        Ingrese un numero válido !
                                    </div>
                                </div>
                                <div class="col-md-9 mb-3">
                                    <label for="txtNombreUsuario">Nombre completo</label>
                                    <input type="text" class="form-control" id="txtNombreUsuario" placeholder="Nombre completo" required>
                                    <div class="valid-feedback">
                                        Nombre correcto !
                                    </div>
                                    <div class="invalid-feedback">
                                        Ingrese un nombre !
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-8 mb-3">
                                    <label for="txtEmailUsuario">Correo electrónico</label>
                                    <input type="email" class="form-control" id="txtEmailUsuario" placeholder="Correo electrónico" required>
                                    <div class="valid-feedback">
                                        Correo válido !
                                    </div>
                                    <div class="invalid-feedback">
                                        Ingrese un correo válido !
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="txtStatusUsuario-">Estatus</label>
                                    <select class="custom-select" required id="txtStatusUsuario">
                                        <option value="" disabled selected>?</option>
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                    <div class="valid-feedback">Estatus correcto !</div>
                                    <div class="invalid-feedback">Seleccione un estatus !</div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    <!-- FOOTER -->
    <?php require_once 'components/js.php' ?>
    <script src="js/user.js"></script>
</body>

</html>