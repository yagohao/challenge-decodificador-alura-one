const output = document.getElementById("respostaid");
const terminal = document.getElementById("terminalid");
const btnencod = document.getElementById("btn-encodid");
const btndecod = document.getElementById("btn-decodid");
const ascii = document.getElementById("ascii")

  function criptografar(){
    const texto = terminal.textContent;
    const palavras = texto.split(" ");
    var criptografia = "";
    for (var i = 0; i < palavras.length; i++) {
    criptografia += palavras[i]
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("a", "ai")
    .replace("o", "ober")
    .replace("u", "ufat") + " ";
    }
    document.getElementById("respostaid").innerHTML = criptografia;
    }

function descriptografar(){
    const texto = terminal.textContent;
    const palavras = texto.split(" ");
    var criptografia = "";
    for (var i = 0; i < palavras.length; i++) {
    criptografia += palavras[i]
    .replace("enter", "e")
    .replace("imes", "i")
    .replace("ai", "a")
    .replace("ober", "o")
    .replace("ufat", "u") + " ";
    }
    document.getElementById("respostaid").innerHTML = criptografia;
    }

function copia() { //faz a cópia ao clicar no botão "copy"
    var text = document.getElementById("respostaid").innerText;

    var input = document.createElement("input");

    input.value = text;

    document.body.appendChild(input);

    input.select();     

    document.execCommand("copy");  

    document.body.removeChild(input);  

    alert("Texto copiado com sucesso!");    

}

function pegarteste(){
    const editableDiv = document.querySelector("#terminalid");
    const text = editableDiv.innerHTML;
    console.log(text)
}

function pegarteste2(){
    const editableDiv = document.querySelector("div[contentEditable=true]");
    const text = editableDiv.textContent;
    return text
}
