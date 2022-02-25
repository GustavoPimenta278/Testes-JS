let campoSku = document.getElementById('sku')
let campoNome = document.getElementById('name');
let campoPreco = document.getElementById('price');
let resultado = document.getElementById('resultado');


function gerarProduto() {

    


    function criaProduto(campoSku, campoNome, campoPreco, ) {

        var objetoProduto = {}

        objetoProduto.sku = campoSku.value;
        objetoProduto.produtoNome = campoNome.value;
        objetoProduto.preco = campoPreco.value;

        function produto () {

            return `${objetoProduto.sku}, ${objetoProduto.produtoNome}, ${objetoProduto.preco}`;
        }

        objetoProduto.informacoes = produto;

        return objetoProduto;
    }


    if (campoSku.value == '' || campoNome.value == '' || campoPreco.value == '') {
        resultado.innerText = 'Dados inválidos! Por favor, verifique os campos.';

    } else {

        let produtoCompleto = criaProduto(campoSku, campoNome, campoPreco);

        resultado.innerText = produtoCompleto.informacoes();
    }
}

function deleteProduct() {
    campoSku.value = ''
    campoNome.value = ''
    campoPreco.value = ''

    resultado.innerText = ''
}