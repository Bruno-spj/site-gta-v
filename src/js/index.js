const botao = document.querySelector(".btn-plataforma");
const selecionePlataforma = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () =>  {

    const botaoSelecionado = selecionePlataforma.classList.contains("ativo")


    if(botaoSelecionado){
        selecionePlataforma.classList.remove("ativo")
    
    } else{
        selecionePlataforma.classList.add("ativo")
    }
});



