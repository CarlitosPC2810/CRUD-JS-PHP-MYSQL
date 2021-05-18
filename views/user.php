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
            BIENVENIDOS
        </a>
        <a href="" class="navbar-brand">
            AGREGAR USUARIOS
        </a>
        <a href="" class="navbar-brand">
            CERRAR SESIÓN
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

    <!-- FOOTER -->
    <?php require_once 'components/js.php' ?>
    <script src="js/user.js"></script>
</body>

</html>