function encriptar(){
    let texto = document.querySelector(".encriptador__texto").value;
    let encriptado = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }
    let nuevo_texto = texto.replaceAll(/[aeiou]/g, function(mensaje){return encriptado[mensaje];});
    let remover_elemento = document.querySelector(".encriptador__contenido__salida");
    while (remover_elemento.firstChild) {
        remover_elemento.removeChild(remover_elemento.firstChild);
    }
    const nuevo_textarea = document.createElement("textarea");
    nuevo_textarea.classList.add("encriptador__texto__salida")
    nuevo_textarea.innerHTML = nuevo_texto;
    remover_elemento.appendChild(nuevo_textarea);
    const nuevo_boton = document.createElement("button");
    nuevo_boton.classList.add("encriptador__botones__copiar")
    nuevo_boton.innerHTML = "Copiar";
    remover_elemento.appendChild(nuevo_boton);
    nuevo_boton.onclick = copiar();
}

function desencriptar(){
    let texto = document.querySelector(".encriptador__texto").value;
    let encriptado = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u",
    }
    let nuevo_texto = texto.replaceAll(/ai|enter|imes|ober|ufat/g, function(mensaje){return encriptado[mensaje];});
    let remover_elemento = document.querySelector(".encriptador__contenido__salida");
    while (remover_elemento.firstChild) {
        remover_elemento.removeChild(remover_elemento.firstChild);
    }
    const nuevo_textarea = document.createElement("textarea");
    nuevo_textarea.classList.add("encriptador__texto__salida")
    nuevo_textarea.innerHTML = nuevo_texto;
    remover_elemento.appendChild(nuevo_textarea);
    const nuevo_boton = document.createElement("button");
    nuevo_boton.classList.add("encriptador__botones__copiar")
    nuevo_boton.innerHTML = "Copiar";
    remover_elemento.appendChild(nuevo_boton);
    nuevo_boton.onclick = copiar();
}

function copiar(){
    let texto = document.querySelector(".encriptador__texto__salida").value;
    navigator.clipboard.writeText(texto);
}