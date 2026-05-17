const botao = document.querySelector(".botao")
const tarefa = document.querySelector(".tarefa")
const lista = document.querySelector(".container-lista")

// variaveis padrões criadas. agora a criação da funcão principal que adiciona o texto à lista.

function adicionarLista(){
    let textoTarefa = tarefa.value  // transforma o que foi escrito no input para uma string que será tratada pela função
    if (textoTarefa === "") { // checa se a string não está vazia
        alert("Por favor, escreva algum texto a ser adicionado à lista");
    return; // interrompe a função.
    }
    const novoItem = document.createElement("li"); // cria um item para a lista
    const span = document.createElement("span"); //cria uma separação para adicionar o botão de excluir posteriormente
    span.textContent = textoTarefa;
    span.className = "itens-lista";

    const excluir = document.createElement("button"); // cria o botão de excluir a ser adicionado a cada novo item.
    excluir.textContent = "excluir";
    excluir.className = "botao-excluir";
    excluir.addEventListener("click", function(){ // função de remover o item da lista quando clicado.
        novoItem.remove()
    });

    novoItem.appendChild(span);
    novoItem.appendChild(excluir);


    lista.appendChild(novoItem); // pega a string que foi passada para o novoItem e adiciona a lista de forma que ela seja visível

    tarefa.value = ""; // apaga o texto no input após ele ter sido adicionado à lista
    tarefa.focus(); // retorna o cursor para o input
}

botao.addEventListener("click", adicionarLista); // quando o botão é clicado, executa a função criada acima
tarefa.addEventListener('keydown', function(tecla) { // quando o enter do teclado é pressionado, a função "tecla" aciona o adicionarLista.
    if (tecla.key === 'Enter') {
        adicionarLista();
}
});