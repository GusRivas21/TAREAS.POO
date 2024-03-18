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
                location.href = "/html/Registro.html"
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

    let url = '/html/perfil.html?Nombre= ' + encodeURIComponent(nombre) +
        '&FechaNac= ' + encodeURIComponent(fechaNacimiento) +
        '&Genero= ' + encodeURIComponent(genero) +
        '&Departamento= ' + encodeURIComponent(departamento) +
        '&Ciudad= ' + encodeURIComponent(ciudad) +
        '&NumTelefono= ' + encodeURIComponent(numeroTelefono) +
        '&Descripcion= ' + encodeURIComponent(descripcion);
    window.location.href = url;
}
