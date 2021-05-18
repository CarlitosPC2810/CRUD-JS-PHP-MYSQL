let usuarios = null;
document.addEventListener('DOMContentLoaded', () => {

    listarUsuarios().then(()=>{
        generarTabla()
    })

})

const listarUsuarios = async () => {
    const container = document.getElementById('Usuarios')
    container.innerHTML = ''
    try{
        let resultado = await axios('../controllers/userController.php', {
            method: 'POST',
            data: {
                tipoPeticion: 'listarUsuarios'
            }
        })
        let res = resultado.data
        if(res[0] == 'success'){
            usuarios = res[1]
            console.log(usuarios)
        }else if(res[0] == 'warning'){
            console.warn(res[1])
            const h5 = document.createElement('h5')
            h5.className = 'text-center'
            h5.textContent = res[1]
            container.append(h5)
        }else if(res[0] == 'error'){
            console.error(res[1])
        }else{
            console.error('respuesta no definida ' + res)
        }
    }catch(error){
        console.log(error)
    }
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
        td.textContent = 'Acciones'
        tr.append(td)
        arrayItems.push(tr)
    });

    
    tbody.append(...arrayItems)
    table.append(thead, tbody)
    document.getElementById('Usuarios').append(table)

}