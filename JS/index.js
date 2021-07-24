var texto2=document.getElementById("texto-2");
var texto1=document.getElementById("texto-1");


function clickNoBotaoProjetos(){
    console.log("clicou no botão projetos");
    texto2.style.display = "Block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    texto2.style.display = "none";
    texto1.style.display = "block";
}




