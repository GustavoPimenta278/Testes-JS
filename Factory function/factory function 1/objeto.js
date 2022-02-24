function gerarPessoa () {

    let campoNome = document.getElementById('campoNome').value;
    let campoSobrenome = document.getElementById('campoSobrenome').value;
    let campoIdade = document.getElementById('campoIdade').value;
    let campoProfissao = document.getElementById('campoProfissao').value;
    let resultado = document.getElementById('resultado');
 
    function fabricarPessoa (campoNome, campoSobrenome, campoIdade, campoProfissao) {

        
        var objetoPessoa = {};
    
            objetoPessoa.nome = campoNome;
            objetoPessoa.sobrenome = campoSobrenome;
            objetoPessoa.idade = campoIdade;
            objetoPessoa.profissao = campoProfissao;
    
            
            function dadosPessoa () {
    
                return `Olá ${objetoPessoa.nome} ${objetoPessoa.sobrenome}! Você tem ${objetoPessoa.idade} anos, certo? E trabalha como ${objetoPessoa.profissao}?`
            }
    
            objetoPessoa.dadosPessoa = dadosPessoa;
    
        return objetoPessoa;
    }

    if (campoNome == '' || campoSobrenome == '' || campoIdade == '' || campoProfissao == '') {
        resultado.innerText = 'Campos inválidos! Por favor, cheque os dados inseridos.'

    } else if (campoIdade > 110) {
        resultado.innerText = 'Idade inválida!'

    } else {
        let pessoaA = fabricarPessoa(campoNome, campoSobrenome, campoIdade, campoProfissao)

        resultado.innerHTML = pessoaA.dadosPessoa()
    }
}