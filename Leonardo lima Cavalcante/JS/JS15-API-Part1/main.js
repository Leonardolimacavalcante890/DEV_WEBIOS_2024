// Função para fazer o request na API
function getImage(e) {
    // Busca a url da API no HTML
    let url_api = document.getElementById('url_api').innerText;
    // console.log(url_api);
    // Função fetch para buscar dados na API
    
    fetch("https://dog.ceo/api/breeds/image/random")

        .then((response) => {
            return response.json();/*receber o JSON na api*/
            // console.log(response);
        })

        .then((data) => {
            // console.log(data);
            document.getElementById('json_aqui').innerText =
                JSON.stringify(data);/*stringify transforma em objeto*/
            // console.log(data.message)/*
            let imagem = `<img class="rounded img-fluid" src="${data.message}" />`;/*cria um mini HTML para colocar a imagem*/
            // Insere a imagem no elemento HTML com id imagem_aqui
            document.querySelector('#imagem_aqui').innerHTML = imagem;
        });
}

//1 parametro message e 2 parametro status se foi sucesso ou não
//todos then tem que ter um aparametro
fetch("url")
.then("receber o JSON")
.then("Tratar o JSON e mostrar as informacoes em tela para usuario")
.catch("catch é para tratar erros retornados pela API")

