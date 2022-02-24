


function gerarProduto() {

    let campoSku = document.getElementById('sku').value
    let campoNome = document.getElementById('name').value;
    let campoPreco = document.getElementById('price').value;
    let resultado = document.getElementById('resultado');


    function criaProduto(campoSku, campoNome, campoPreco, ) {

        var objetoProduto = {}

        objetoProduto.sku = campoSku;
        objetoProduto.produtoNome = campoNome;
        objetoProduto.preco = campoPreco;

        function produto () {

            return `${objetoProduto.sku}, ${objetoProduto.produtoNome}, ${objetoProduto.preco}`;
        }

        objetoProduto.informacoes = produto;

        return objetoProduto;
    }


    if (campoSku == '' || campoNome == '' || campoPreco == '') {
        resultado.innerHTML = 'Dados inválidos! Por favor, verifique os campos.';

    } else {

        let produtoCompleto = criaProduto(campoSku, campoNome, campoPreco);

        resultado.innerHTML = produtoCompleto.informacoes();
    }
}

    