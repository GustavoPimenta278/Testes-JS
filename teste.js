function fabricarPessoa (nome, sobrenome, idade, hobby) {
    var pessoa = {};

        pessoa.nome = nome;
        pessoa.sobrenome = sobrenome;
        pessoa.idade = idade;
        pessoa.hobby = hobby;


        function todosDados () {

            return `Você acessou o objeto ${pessoa.nome} ${pessoa.sobrenome}. Este usuario possui ${pessoa.idade} e seu hobby é ${pessoa.hobby}`;
        }

        pessoa.todosDados = todosDados;

    return pessoa;
}

let pessoaA = fabricarPessoa('Gustavo', 'Alves Pimenta', 17, 'programador');
let pessoaB = fabricarPessoa('Kauanny', 'Mendonça', 18, 'ser linda');
let pessoaC = fabricarPessoa('Marco', 'Aurelio', 34, 'motorista');

console.log(pessoaA.todosDados());