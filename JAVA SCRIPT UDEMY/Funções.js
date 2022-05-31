function saudacao (nome) {
 
    return (`Bom dia ${nome}!`);
}
const variavel =saudacao ("Luiz");
// se eu quiser que minha função retorne um valor =>
console.log(variavel)

function soma (x,y){
    return x + y
}

console.log (soma(2,3))

// outra forma de escrever a função soma

function soma (x,y){
    const resultado = x+y; // armazenando o processo em uma variável
    return resultado
}

// se eu não enviar parametros, mas determinar um valor para o mesmo....
function soma ( x=1,y=4){
    const resultado= x+y
    return resultado;
}
const resultado = soma (4,2);
console.log (resultado)

// Outra opção de criação de funções = armazenando 

const raiz = function (n){
    return n **0.5
}

// Outra opção de construção de funções : Arrow Function 

const raizes = (n) => {
    return n **0.5;
}

// Simplificação da função 

const raizes2= n => n **0.5;

// Função para criar objeto


function criaPessoa (nome,sobrenome,idade){
    return {
        nome :nome,
        sobrenome: sobrenome,
        idade:idade
    };
}
const pessoa1 = criaPessoa("luiz", "otávio", 25)