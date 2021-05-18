let usuarios = null;
const modalUsuarios = new bootstrap.Modal(document.getElementById('exampleModal'))
document.addEventListener('DOMContentLoaded', () => {
    //console.error(modalUsuarios)
    listarUsuarios().then(() => {
        generarTabla()
    })
    validarFormularios();

    document.getElementById('btnAgregarUsuario').addEventListener('click', () => {
        document.getElementById('formUsuarios').reset()
        document.getElementById('tituloModalUsuarios').innerHTML = 'Agregar Usuario'
        document.getElementById('txtIdUsuario').innerHTML = ''
        document.getElementById('formUsuarios').classList.remove = 'was-validated'
    })
})

const listarUsuarios = async () => {
    const container = document.getElementById('Usuarios')
    container.innerHTML = ''
    try {
        let resultado = await axios('../controllers/userController.php', {
            method: 'POST',
            data: {
                tipoPeticion: 'listarUsuarios'
            }
        })
        let res = resultado.data
        if (res[0] == 'success') {
            usuarios = res[1]
            console.log(usuarios)
        } else if (res[0] == 'warning') {
            console.warn(res[1])
            const h5 = document.createElement('h5')
            h5.className = 'text-center'
            h5.textContent = res[1]
            container.append(h5)
        } else if (res[0] == 'error') {
            console.error(res[1])
        } else {
            console.error('respuesta no definida ' + res)
        }
    } catch (error) {
        console.log(error)
    }
}

const recolectarDatosGUIUsuario = () => {
    return {
        id: document.getElementById('txtId').value,
        idUsuario: document.getElementById('txtIdUsuario').value,
        nombreUsuario: document.getElementById('txtNombreUsuario').value,
        correoUsuario: document.getElementById('txtEmailUsuario').value,
        EstatusUsuario: document.getElementById('txtStatusUsuario').value
    }
}

const accionesUsuario = async (accion, datos) => {
    if (accion == 'agregar') {
        try {
            let resultado = await axios('../controllers/userController.php', {
                method: 'POST',
                data: {
                    tipoPeticion: 'agregarUsuario',
                    idUsuario: datos.idUsuario,
                    nombreUsuario: datos.nombreUsuario,
                    correoUsuario: datos.correoUsuario,
                    EstatusUsuario: datos.EstatusUsuario
                }
            })
            let res = resultado.data
            if (res[0] == 'success') {
                swal({
                    title: 'Excelente !',
                    text: res[1],
                    icon: 'success',
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            $('#exampleModal').modal('hide')
                            document.getElementById('formUsuarios').reset();
                            listarUsuarios().then(() => { generarTabla() })
                        } else {
                            swal("OK");
                        }
                    });
            } else if (res[0] == 'warning') {
                console.warn([res[1]])
            } else if (res[0] == 'error') {
                swal({
                    title: ':( !',
                    text: `${res[1]}`,
                    icon: 'error',
                    button: 'Ok',
                });
            } else {
                console.log('respuesta no definida ' + res)
            }
        } catch {

        }
    } else if (accion == 'eliminar') {
        try {
            let res = await axios('../controllers/userController.php', {
                method: 'POST',
                data: {
                    tipoPeticion: 'eliminarUsuario',
                    idUsuario: datos
                }
            })
            let respuesta = res.data
            if (respuesta[0] == 'success') {
                swal({
                    title: 'Excelente !',
                    text: `${respuesta[1]}`,
                    icon: 'Success',
                    button: 'Ok',
                });
                listarUsuarios().then(() => { generarTabla() })
            } else if (respuesta[0] == 'error') {
                swal({
                    title: ':( !',
                    text: `${respuesta[1]}`,
                    icon: 'error',
                    button: 'Ok',
                });
            } else if (respuesta[0] == 'warning') {
                console.warn(respuesta[1])
            } else {
                console.warn('respuesta no definida ' + respuesta)
            }
        } catch {
            console.error(error)
        }
    } else if (accion == 'editar') {
        try {
            let res = await axios('../controllers/userController.php', {
                method: 'POST',
                data: {
                    tipoPeticion: 'editarUsuario',
                    id: datos.id,
                    idUsuario: datos.idUsuario,
                    nombreUsuario: datos.nombreUsuario,
                    correoUsuario: datos.correoUsuario,
                    statusUsuario: datos.EstatusUsuario
                }
            })

            let respuesta = res.data
            if (respuesta[0] == 'success') {
                swal({
                    title: 'Actualizando usuario...',
                    text: `¿Está seguro de actualizar los datos ?`,
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            swal({
                                title: 'Excelente !',
                                text: `${respuesta[1]}`,
                                icon: 'success',
                                buttons: true,
                                dangerMode: true,
                            })
                                .then((verdadero) => {
                                    if (verdadero) {
                                        $('#exampleModal').modal('hide')
                                        modalUsuarios.hide();
                                        document.getElementById('formUsuarios').reset()
                                        listarUsuarios().then(() => {
                                            generarTabla()
                                        })
                                    } else {
                                        swal("OK");
                                
                                    }
                                })

                        } else {
                            swal("Cancelado", {
                                icon: 'error'
                            });
                        }
                    });
            } else if (respuesta[0] == 'error') {
                swal({
                    title: ':( !',
                    text: `${respuesta[1]}`,
                    icon: 'error',
                    button: 'Ok',
                });
            } else if (respuesta[0] == 'warning') {
                console.warn(respuesta[1])
            } else {
                console.warn('respuesta no definida ' + respuesta)
            }
        } catch {
            console.error(error)
        }
    }
}

const validarFormularios = () => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault();
                    if (form.id == 'formUsuarios') {
                        const hey = document.getElementById('tituloModalUsuarios').innerHTML;
                        if (hey == 'Agregar Usuario') {
                            accionesUsuario('agregar', recolectarDatosGUIUsuario())
                        } else if (hey == 'Actualizar Usuario') {
                            accionesUsuario('editar', recolectarDatosGUIUsuario())
                        } else {
                            console.log('que show')
                        }
                    }
                }
                form.classList.add('was-validated')
            }, false)
        })
}

const generarTabla = () => {
    let table = document.createElement('table'),
        thead = document.createElement('thead'),
        tbody = document.createElement('tbody'),
        tr = document.createElement('tr'),
        th = document.createElement('th'),
        arrayItems = []

    table.id = 'tablaUsuarios'
    table.className = 'table table-striped'
    table.style.width = '100%'
    thead.style.backgroundColor = '#F7F7F9'

    th.scope = 'col'
    th.textContent = '#'
    tr.append(th)
    th = document.createElement('th')
    th.scope = 'col'
    th.textContent = 'Nombre'
    tr.append(th)
    th = document.createElement('th')
    th.scope = 'col'
    th.textContent = 'Correo'
    tr.append(th)
    th = document.createElement('th')
    th.scope = 'col'
    th.textContent = 'Status'
    tr.append(th)
    th = document.createElement('th')
    th.scope = 'col'
    th.className = 'text-center'
    th.textContent = 'Acciones'
    tr.append(th)
    thead.append(tr)

    usuarios.forEach(Items => {
        tr = document.createElement('tr')
        th = document.createElement('th')
        th.scope = 'row'
        th.textContent = Items['id_usuario']
        tr.append(th)
        td = document.createElement('td')
        td.textContent = Items['nombre_usuario']
        tr.append(td)
        td = document.createElement('td')
        td.textContent = Items['correo']
        tr.append(td)
        td = document.createElement('td')
        td.textContent = Items['status']
        tr.append(td)
        td = document.createElement('td')
        td.className = 'text-center'
        i = document.createElement('i')
        i.className = 'fas fa-user-times text-danger m-2'
        a = document.createElement('a')
        a.className = 'btnDelete'
        a.id = 'btnDelete-' + Items['id_usuario']
        a.append(i)
        td.append(a)
        i = document.createElement('i')
        i.className = 'fas fa-user-edit text-info m-2'
        a = document.createElement('a')
        a.className = 'btnEdit'
        a.id = 'btnEdit-' + Items['id_usuario']
        a.append(i)
        td.append(a)
        tr.append(td)
        arrayItems.push(tr)
    });


    tbody.append(...arrayItems)
    table.append(thead, tbody)
    document.getElementById('Usuarios').innerHTML = ''
    document.getElementById('Usuarios').append(table)

    listenersAccionesUsuario()

}

const listenersAccionesUsuario = () => {
    let elementosEditar = document.getElementsByClassName('btnEdit'),
        elementosEliminar = document.getElementsByClassName('btnDelete')

    console.log(elementosEditar)
    for (let i = 0; i < elementosEditar.length; i++) {
        document.getElementById(elementosEditar[i].id).addEventListener('click', function () {
            let idUsuario = this.id.split('-')[1]
            document.getElementById('tituloModalUsuarios').innerHTML = 'Actualizar Usuario'
            for (const user in usuarios) {
                if (usuarios[user].id_usuario == idUsuario) {
                    document.getElementById('txtId').value = usuarios[user].id
                    document.getElementById('txtIdUsuario').value = usuarios[user].id_usuario
                    document.getElementById('txtNombreUsuario').value = usuarios[user].nombre_usuario
                    document.getElementById('txtEmailUsuario').value = usuarios[user].correo
                    document.getElementById('txtStatusUsuario').value = usuarios[user].status
                    modalUsuarios.show();
                    break;
                }
            }
        })
    }

    for (let i = 0; i < elementosEliminar.length; i++) {
        document.getElementById(elementosEliminar[i].id).addEventListener('click', function () {
            let idUsuario = this.id.split('-')[1],
                nombreUsuario = ''
            for (const user in usuarios) {
                if (usuarios[user].id_usuario == idUsuario) {
                    nombreUsuario = usuarios[user].nombre_usuario
                    break
                }
            }
            swal({
                title: 'Eliminando usuario...',
                text: `¿Está seguro de eliminar a ${nombreUsuario} ?`,
                icon: 'warning',
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        accionesUsuario('eliminar', idUsuario).then(() => {
                            swal('Usuario eliminado', {
                                icon: 'success',
                            });
                        })
                    } else {
                        swal("Cancelado", {
                            icon: 'error'
                        });
                    }
                });

        })
    }
}