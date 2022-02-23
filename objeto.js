function gerarPessoa () {

    // PUXANDO A DOM
    let campoNome = document.getElementById('campoNome').value;
    let campoSobrenome = document.getElementById('campoSobrenome').value;
    let campoIdade = document.getElementById('campoIdade').value;
    let campoProfissao = document.getElementById('campoProfissao').value;
    let resultado = document.getElementById('resultado');

    // Essa função é responsável por criar o objeto que será retornado no html
    function fabricarPessoa (campoNome, campoSobrenome, campoIdade, campoProfissao) {

        // Definindo as propriedades do objeto
        var objetoPessoa = {};
    
            objetoPessoa.nome = campoNome;
            objetoPessoa.sobrenome = campoSobrenome;
            objetoPessoa.idade = campoIdade;
            objetoPessoa.profissao = campoProfissao;
    
            // Função para agrupar as propriedades em um unico objeto
            function dadosPessoa () {
    
                return `Olá ${objetoPessoa.nome} ${objetoPessoa.sobrenome}! Você tem ${objetoPessoa.idade} anos, certo? E trabalha como ${objetoPessoa.profissao}?`
            }
    
            // Aqui é definido uma nova propriedade que recebe a função que agrupa as outras propriedades
            objetoPessoa.dadosPessoa = dadosPessoa;
    
        // retorna o objeto por completo com todas as propriedades e valores
        return objetoPessoa;
    }

    // Gerando o objeto que será apresentado no HTML
    let pessoaA = fabricarPessoa(campoNome, campoSobrenome, campoIdade, campoProfissao)

    resultado.innerHTML = pessoaA.dadosPessoa()
}