let objetos = [
    { nome: "Garrafa azul", local: "Laboratório 2", categoria: "Acessórios", data: "2026-11-25", descricao: "Tem um adesivo na tampa." },
    { nome: "Estojo preto", local: "Biblioteca", categoria: "Material escolar", data: "2026-11-26", descricao: "Fecho vermelho." }
];


function cadastrarObjeto(){
    //1 PEGAR OS VALORES DOS INPUTS
    var nome = document.getElementById("nome").value;
    var local = document.getElementById("local").value;
    var categoria = document.getElementById("categoria").value;
    var data = document.getElementById("data").value;
    var descricao = document.getElementById("descricao").value;

    if(nome === "" || local === "" || categoria === "" || data === ""){
        alert("EI BOBÃO, COLOCA TODOS OS DADOS AI")
        return
    }

    //2 CRIAR UM NOVO OBJETO COM OS VALORES CAPTURADOS
    var novoObjeto = {
        nome: nome,
        local: local,
        categoria: categoria,
        data: data,
        descricao: descricao,
            
    }

    //3 JOGAR NOVO OBJETO PARA LISTA
    objetos.push(novoObjeto)

    //4 ATUALIZAR A TELA
    mostrarObjetos();

    //5 LIMPER OS CAMPOS
    document.getElementById("nome").value = ""
    document.getElementById("local").value = ""
    document.getElementById("categoria").value = ""
    document.getElementById("data").value = ""
    document.getElementById("descricao").value = ""
};

function deletar(nome){
    var querDeletar = confirm("DESEJA MESMO DELETAR O OBJETO " + nome);
    if(querDeletar === false){
        return
    }
    var objetosFiltrados = objetos = objetos.filter((item) => item.nome !== nome); // REFAZ O LISTA COM TUDO QUE FOR DIFERENTE, "DELETA" O COM O MESMO NOME
    objetos = [...objetosFiltrados];
    mostrarObjetos();
}

function atualizar(nome){
    var indexObjeto = objetos.findIndex(item => item.nome === nome)

    document.getElementById("nome").value = objetos[indexObjeto].nome

}

function mostrarObjetos(){
    const listaObjetosHtml = document.getElementById("lista-objetos");

    listaObjetosHtml.innerHTML = "";

    for(var objeto of objetos){

        const dataFormatada = objeto.data.split("-").reverse().join("/")

        listaObjetosHtml.innerHTML += `
            <li>
                <span class ="categoria">${objeto.categoria}</span>
                <h3>${objeto.nome}</h3>
                <p class="detalhes">${objeto.local} - ${dataFormatada}</p>
                <P>${objeto.descricao}</p>
                <button onclick="deletar('${objeto.nome}')">Deletar</button>
                <button onclick="atualizar('${objeto.nome}')">Atualizar</button>
                </li>
                
        `; 
    }
};

mostrarObjetos();