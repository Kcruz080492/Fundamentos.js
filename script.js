// 1. Tipos de datos y declaración de variables

function ejemploTipos1() {
    let nombre = "Juan";
    let edad = 25;
    let esEstudiante = true;
    let salario = null;
    let telefono;
    const PI = 3.14159;

    let salida = "";
    salida += `<p><strong>typeof nombre:</strong> ${typeof nombre}</p>`;
    salida += `<p><strong>typeof edad:</strong> ${typeof edad}</p>`;
    salida += `<p><strong>typeof esEstudiante:</strong> ${typeof esEstudiante}</p>`;
    salida += `<p><strong>typeof salario:</strong> ${typeof salario}</p>`;
    salida += `<p><strong>typeof telefono:</strong> ${typeof telefono}</p>`;
    salida += `<p><strong>typeof PI:</strong> ${typeof PI}</p>`;

    document.getElementById("output-tipos1").innerHTML = salida;
}

function ejemploTipos2() {
    let numeroTexto = "123";
    let numero = Number(numeroTexto);
    let textoNumero = String(456);
    let booleano = Boolean(1);

    let suma = "5" + 3;
    let resta = "5" - 3;
    let comparacion = "5" == 5;

    let salida = "";
    salida += `<p><strong>Number("123"):</strong> ${numero} (${typeof numero})</p>`;
    salida += `<p><strong>String(456):</strong> "${textoNumero}" (${typeof textoNumero})</p>`;
    salida += `<p><strong>Boolean(1):</strong> ${booleano} (${typeof booleano})</p>`;
    salida += `<hr>`;
    salida += `<p><strong>"5" + 3:</strong> ${suma} (${typeof suma})</p>`;
    salida += `<p><strong>"5" - 3:</strong> ${resta} (${typeof resta})</p>`;
    salida += `<p><strong>"5" == 5:</strong> ${comparacion} (${typeof comparacion})</p>`;

    document.getElementById("output-tipos2").innerHTML = salida;
}

function ejemploTipos3() {
    var globalVar = "Variable global";
    var funcionVar = "Variable de función";
    let bloqueVar = "Variable de bloque";
    const constante = "No puede cambiar";
    var dentroIf = "var es visible fuera del bloque";

    let salida = "";
    salida += `<p><strong>globalVar:</strong> ${globalVar}</p>`;
    salida += `<p><strong>funcionVar:</strong> ${funcionVar}</p>`;
    salida += `<p><strong>bloqueVar:</strong> ${bloqueVar}</p>`;
    salida += `<p><strong>constante:</strong> ${constante}</p>`;
    salida += `<p><strong>dentroIf:</strong> ${dentroIf}</p>`;
    salida += `<p><em>Nota:</em> Las variables declaradas con <code>let</code> y <code>const</code> no son accesibles fuera del bloque donde se crean.</p>`;

    document.getElementById("output-tipos3").innerHTML = salida;
}

// 2. Operadores y expresiones

function ejemploOperadores1() {
    let a = 10;
    let b = 3;
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;
    let modulo = a % b;

    let contador = 5;
    contador += 3;
    contador -= 2;
    contador *= 2;

    let x = 5;
    let salida = "";
    salida += `<p>10 + 3 = ${suma}</p>`;
    salida += `<p>10 - 3 = ${resta}</p>`;
    salida += `<p>10 * 3 = ${multiplicacion}</p>`;
    salida += `<p>10 / 3 = ${division}</p>`;
    salida += `<p>10 % 3 = ${modulo}</p>`;
    salida += `<hr>`;
    salida += `<p>Contador (operaciones combinadas): ${contador}</p>`;
    salida += `<hr>`;
    salida += `<p>Post-incremento x++: ${x++} (luego x vale ${x})</p>`;
    salida += `<p>Pre-incremento ++x: ${++x}</p>`;

    document.getElementById("output-operadores1").innerHTML = salida;
}

function ejemploOperadores2() {
    let salida = "";
    salida += `<p>5 == "5": ${5 == "5"}</p>`;
    salida += `<p>5 === "5": ${5 === "5"}</p>`;
    salida += `<p>null == undefined: ${null == undefined}</p>`;
    salida += `<p>null === undefined: ${null === undefined}</p>`;
    let edad = 18;
    salida += `<hr>`;
    salida += `<p>edad >= 18: ${edad >= 18}</p>`;
    salida += `<p>edad !== 17: ${edad !== 17}</p>`;
    salida += `<hr>`;
    salida += `<p>"apple" < "banana": ${"apple" < "banana"}</p>`;
    salida += `<p>"10" < "9": ${"10" < "9"}</p>`;

    document.getElementById("output-operadores2").innerHTML = salida;
}

function ejemploOperadores3() {
    let esMayor = true;
    let tieneID = false;

    let nombre = "" || "Usuario Anónimo";
    let saludo = nombre && "Hola " + nombre;

    let resultado = 2 + 3 * 4;
    let resultado2 = (2 + 3) * 4;

    let salida = "";
    salida += `<p>esMayor && tieneID: ${esMayor && tieneID}</p>`;
    salida += `<p>esMayor || tieneID: ${esMayor || tieneID}</p>`;
    salida += `<p>!tieneID: ${!tieneID}</p>`;
    salida += `<hr>`;
    salida += `<p>nombre = "" || "Usuario Anónimo": ${nombre}</p>`;
    salida += `<p>saludo = nombre && "Hola " + nombre: ${saludo}</p>`;
    salida += `<hr>`;
    salida += `<p>2 + 3 * 4 = ${resultado}</p>`;
    salida += `<p>(2 + 3) * 4 = ${resultado2}</p>`;

    document.getElementById("output-operadores3").innerHTML = salida;
}

// 3. Entrada y salida de datos

function ejemploES1() {
    let usuario = "Ana";
    let edad = 25;

    let salida = "";
    salida += `<p>console.log("Mensaje en la consola")</p>`;
    salida += `<p>console.warn("Esto es una advertencia")</p>`;
    salida += `<p>console.error("Esto es un error")</p>`;
    salida += `<hr>`;
    salida += `<p>Usuario: ${usuario}, Edad: ${edad}</p>`;
    salida += `<p>Usuario: ${usuario}, Edad: ${edad} (usando template literal)</p>`;

    document.getElementById("output-es1").innerHTML = salida;
}

function ejemploES2() {
    let nombre = "María";
    let email = "maria@email.com";
    let fecha = new Date().toLocaleDateString();

    let salida = `<p>Nombre: ${nombre}<br>Email: ${email}<br>Fecha: ${fecha}</p>`;
    salida += `<hr>`;
    let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    salida += `<p>Email válido: ${patron.test(email)}</p>`;

    document.getElementById("output-es2").innerHTML = salida;
}

function ejemploES3() {
    let entradas = ["123", "  Hola Mundo  ", true];
    let salida = "";
    entradas.forEach(entrada => {
        let numero = Number(entrada);
        let texto = String(entrada).trim();
        salida += `<hr>`;
        salida += `<p><strong>Entrada original:</strong> ${entrada} (<em>${typeof entrada}</em>)</p>`;
        if (!isNaN(numero)) {
            salida += `<p>Como número: ${numero} (${Number.isInteger(numero) ? "entero" : "decimal"})</p>`;
        }
        salida += `<p>Como texto: "${texto}" (longitud: ${texto.length})</p>`;
        salida += `<p>Está vacío: ${texto === ""}</p>`;
        salida += `<p>Es solo números: ${/^\d+$/.test(texto)}</p>`;
    });

    document.getElementById("output-es3").innerHTML = salida;
}

// 4. Manipulación de cadenas y números

function ejemploManipulacion1() {
    let frase = "  Hola Mundo JavaScript  ";

    let nuevaFrase = frase.replace("JavaScript", "JS");
    let palabras = frase.trim().split(" ");

    let salida = "";
    salida += `<p>Longitud: ${frase.length}</p>`;
    salida += `<p>Sin espacios: "${frase.trim()}"</p>`;
    salida += `<p>Mayúsculas: "${frase.toUpperCase()}"</p>`;
    salida += `<p>Minúsculas: "${frase.toLowerCase()}"</p>`;
    salida += `<p>Posición de 'Mundo': ${frase.indexOf("Mundo")}</p>`;
    salida += `<p>Incluye 'Java': ${frase.includes("Java")}</p>`;
    salida += `<p>Substring (2,6): "${frase.substring(2, 6)}"</p>`;
    salida += `<p>Reemplazado: "${nuevaFrase}"</p>`;
    salida += `<p>Palabras: [${palabras.join(", ")}]</p>`;

    document.getElementById("output-manipulacion1").innerHTML = salida;
}

function ejemploManipulacion2() {
    let numero = 123.456789;
    let texto = "42.5px";

    let salida = "";
    salida += `<p>Número original: ${numero}</p>`;
    salida += `<p>Redondeado: ${Math.round(numero)}</p>`;
    salida += `<p>Hacia arriba (ceil): ${Math.ceil(numero)}</p>`;
    salida += `<p>Hacia abajo (floor): ${Math.floor(numero)}</p>`;
    salida += `<p>2 decimales: ${numero.toFixed(2)}</p>`;
    salida += `<hr>`;
    salida += `<p>parseInt("${texto}"): ${parseInt(texto)}</p>`;
    salida += `<p>parseFloat("${texto}"): ${parseFloat(texto)}</p>`;
    salida += `<p>Es número: ${!isNaN(parseFloat(texto))}</p>`;
    salida += `<hr>`;
    salida += `<p>Aleatorio 0-1: ${Math.random()}</p>`;
    salida += `<p>Aleatorio 1-10: ${Math.floor(Math.random() * 10) + 1}</p>`;
    salida += `<p>Potencia 2^3: ${Math.pow(2, 3)}</p>`;
    salida += `<p>Raíz cuadrada de 16: ${Math.sqrt(16)}</p>`;

    document.getElementById("output-manipulacion2").innerHTML = salida;
}

function ejemploManipulacion3() {
    function formatearNombre(nombre) {
        return nombre.trim()
            .toLowerCase()
            .split(' ')
            .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
            .join(' ');
    }
    function formatearMoneda(cantidad) {
        return "$" + cantidad.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    function validarFormato(texto, tipo) {
        const patrones = {
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            telefono: /^\d{3}-\d{3}-\d{4}$/,
            codigo: /^[A-Z]{2}\d{4}$/
        };
        return patrones[tipo] ? patrones[tipo].test(texto) : false;
    }

    let salida = "";
    salida += `<p>Nombre formateado: ${formatearNombre("juan PÉREZ garcía")}</p>`;
    salida += `<p>Moneda: ${formatearMoneda(1234567.89)}</p>`;
    salida += `<p>Email válido: ${validarFormato("test@email.com", "email")}</p>`;

    document.getElementById("output-manipulacion3").innerHTML = salida;
}

// 5. Template literals e interpolación

function ejemploTemplates1() {
    let nombre = "Carlos";
    let edad = 30;
    let profesion = "Desarrollador";

    let mensaje1 = "Hola, mi nombre es " + nombre + ", tengo " + edad + " años y soy " + profesion + ".";
    let mensaje2 = `Hola, mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}.`;

    let precio = 99.99;
    let descuento = 0.15;
    let mensaje3 = `El precio final es: $${(precio * (1 - descuento)).toFixed(2)}`;

    let salida = "";
    salida += `<p>Concatenación: ${mensaje1}</p>`;
    salida += `<p>Template literal: ${mensaje2}</p>`;
    salida += `<p>${mensaje3}</p>`;

    document.getElementById("output-templates1").innerHTML = salida;
}

function ejemploTemplates2() {
    let poema = `
    En un lugar de la Mancha,
    de cuyo nombre no quiero acordarme,
    no ha mucho tiempo que vivía
    un hidalgo de los de lanza en astillero.
    `;

    function crearTarjetaUsuario(usuario) {
        return `
            <div class="tarjeta-usuario">
                <h3>${usuario.nombre}</h3>
                <p>Email: ${usuario.email}</p>
                <p>Edad: ${usuario.edad} años</p>
                <p>Estado: ${usuario.activo ? 'Activo' : 'Inactivo'}</p>
            </div>
        `;
    }

    let usuario = {
        nombre: "Ana García",
        email: "ana@email.com",
        edad: 28,
        activo: true
    };

    let salida = `<pre>${poema}</pre><hr>`;
    salida += `<strong>HTML generado:</strong> ${crearTarjetaUsuario(usuario)}`;

    document.getElementById("output-templates2").innerHTML = salida;
}

function ejemploTemplates3() {
    function obtenerSaludo(hora) {
        if (hora < 12) return "Buenos días";
        if (hora < 18) return "Buenas tardes";
        return "Buenas noches";
    }

    function formatearFecha(fecha) {
        return fecha.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    let horaActual = new Date().getHours();
    let fechaActual = new Date();
    let nombreUsuario = "María";

    let mensajeBienvenida = `
        ${obtenerSaludo(horaActual)}, ${nombreUsuario}!<br>
        Hoy es ${formatearFecha(fechaActual)}<br>
        ${horaActual >= 18 ? '🌙' : '☀️'} 
        Tienes ${Math.floor(Math.random() * 5) + 1} mensajes nuevos.
    `;

    let edad = 17;
    let mensaje = `Eres ${edad >= 18 ? 'mayor' : 'menor'} de edad`;

    let salida = `<p>${mensajeBienvenida}</p><p>${mensaje}</p>`;

    document.getElementById("output-templates3").innerHTML = salida;
}

// 6. Estructuras condicionales

function ejemploCondicionales1() {
    function evaluarNota(nota) {
        let resultado;
        if (nota >= 90) resultado = "Excelente";
        else if (nota >= 80) resultado = "Muy bueno";
        else if (nota >= 70) resultado = "Bueno";
        else if (nota >= 60) resultado = "Suficiente";
        else resultado = "Insuficiente";
        return resultado;
    }

    function verificarAcceso(edad, tieneID, esEstudiante) {
        if (edad >= 18) {
            if (tieneID) return "Acceso completo";
            else return "Necesita identificación";
        } else {
            if (esEstudiante) return "Acceso con supervisión";
            else return "Acceso denegado";
        }
    }

    let salida = "";
    salida += `<p>Nota 85: ${evaluarNota(85)}</p>`;
    salida += `<p>Acceso (17, false, true): ${verificarAcceso(17, false, true)}</p>`;
    salida += `<p>Acceso (20, true, false): ${verificarAcceso(20, true, false)}</p>`;

    document.getElementById("output-condicionales1").innerHTML = salida;
}

function ejemploCondicionales2() {
    function obtenerDiaSemana(numero) {
        switch (numero) {
            case 1: return "Lunes";
            case 2: return "Martes";
            case 3: return "Miércoles";
            case 4: return "Jueves";
            case 5: return "Viernes";
            case 6: return "Sábado";
            case 7: return "Domingo";
            default: return "Número inválido";
        }
    }

    function tipoOperacion(simbolo) {
        switch (simbolo) {
            case '+':
            case '-':
                return "Operación aritmética básica";
            case '*':
            case '/':
                return "Operación aritmética avanzada";
            case '%':
                return "Operación de módulo";
            default:
                return "Operación desconocida";
        }
    }

    function clasificarEdad(edad) {
        return edad >= 18
            ? "Adulto"
            : edad >= 13
                ? "Adolescente"
                : "Niño";
        }
function calcularDescuento(edad, esEstudiante, esMiembro) {
        let descuento = edad >= 65 ? 0.3 :
            esEstudiante ? 0.15 :
                esMiembro ? 0.1 : 0;
        return (descuento * 100) + "%";
    }

    let salida = "";
    salida += `<p>Día 3: ${obtenerDiaSemana(3)}</p>`;
    salida += `<p>Operación +: ${tipoOperacion('+')}</p>`;
    salida += `<p>Clasificar edad 16: ${clasificarEdad(16)}</p>`;
    salida += `<p>Descuento (25, true, false): ${calcularDescuento(25, true, false)}</p>`;

    document.getElementById("output-condicionales2").innerHTML = salida;
}

function ejemploCondicionales3() {
    function probarValores() {
        let valores = [false, 0, "", null, undefined, NaN, "texto", 42, [], {}];
        let salida = "";
        valores.forEach(valor => {
            salida += `<p>${String(valor)} es ${valor ? 'truthy' : 'falsy'}</p>`;
        });
        return salida;
    }

    function configurarUsuario(opciones) {
        let usuario = {
            nombre: opciones.nombre || "Usuario Anónimo",
            edad: opciones.edad || 18,
            tema: opciones.tema || "claro",
            notificaciones: opciones.notificaciones !== undefined ? opciones.notificaciones : true
        };
        return JSON.stringify(usuario, null, 2);
    }

    function procesarDatos(datos) {
        let salida = "";
        datos && datos.length && (salida += `<p>Procesando ${datos.length} elementos</p>`);
        if (datos && Array.isArray(datos) && datos.length > 0) {
            salida += `<p>${datos.map(item => item.toUpperCase()).join(', ')}</p>`;
            return salida;
        }
        return "<p>No hay datos</p>";
    }

    let salida = probarValores();
    salida += `<hr>`;
    let configuracion = { nombre: "Juan", tema: "oscuro" };
    salida += `<pre>Usuario configurado: ${configurarUsuario(configuracion)}</pre>`;
    salida += `<hr>`;
    salida += `Datos procesados: ${procesarDatos(["hola", "mundo"])}<br>`;
    salida += `Datos vacíos: ${procesarDatos([])}`;

    document.getElementById("output-condicionales3").innerHTML = salida;
}


