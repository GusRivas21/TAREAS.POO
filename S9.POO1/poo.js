class Sesion {
    constructor(usuario, pass, bdusuario, bdpwd) {
        this.usuario = usuario;
        this.pass = pass;
        this.bdusuario = bdusuario;
        this.bdpwd = bdpwd;
    }

    validar() {
        if (this.usuario !== this.bdusuario && this.pass !== this.bdpwd) {
            alertify.error("Usuario y contraseña incorrectos");
        } else if (this.usuario !== this.bdusuario) {
            alertify.error("Usuario incorrecto");
        } else if (this.pass !== this.bdpwd) {
            alertify.error("La Contraseña es Incorrecta");
        } else {
            alertify.success("Las Credenciales son Correctas");
            setTimeout(() => {
                location.href = "poo.html"
            }, 1000);
        }
    }
}


class usuario extends Sesion {
    constructor(usuario, pass, bdusuario, bdpwd) {
        super(usuario, pass, bdusuario, bdpwd)
    }
}

function login() {
    let user = document.getElementById('user').value
    let pwd = document.getElementById('pwd').value

    Consulta = new usuario(user, pwd, 'Gustavo', '1270')
    Consulta.validar()
}

function CrearUsuario() {
    const nombre = document.getElementById("Nombre").value
    const fechaNacimiento = document.getElementById("FechaNac").value
    const genero = document.getElementById("Genero").value
    const departamento = document.getElementById("Departamento").value
    const ciudad = document.getElementById("Ciudad").value
    const numeroTelefono = document.getElementById("NumTelefono").value
    const descripcion = document.getElementById("Descripcion").value
    const $body = document.getElementsByTagName("body")[0];

    $body.innerHTML = `
    <div class="Conteiner">
        <h1 class="Crear-Usuario-Conteiner">Perfil</h1>
        <div>
            <p>Nombre: ${nombre}</p>
            <br>
            <p>Fecha de Nacimiento: ${fechaNacimiento}</p>
            <br>
            <p>Genero: ${genero}</p>
            <br>
            <p>Departamento: ${departamento}</p>
            <br>
            <p>Ciudad: ${ciudad}</p>
            <br>
            <p>Numero de telefono: ${numeroTelefono}</p>
            <br>
            <p>Descripcion: ${descripcion}</p>
        </div>
        <br>
        <p>Informacion completada :)</p>
    </div>
    `
}