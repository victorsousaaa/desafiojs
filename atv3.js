
// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

let dia = "Claro"
if(dia == "Claro"){
    console.log("Esta de dia");
}
else{
    console.log("Esta de noite");
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for(let contador = 0; contador <=20; contador +=1 ){
    console.log(contador)
}

// 03 - crie uma função que exiba uma mensagem no console

function minhaComidaFavorita(){
console.log("Minha comida favorita é lasanha")
}
minhaComidaFavorita();

//04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console


function nomeExibir(nome){
    console.log("Meu nome é " + nome)
}

nomeExibir("Victor");

//05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function informacaoExibir(nome, idade, estilomusical) {
    console.log(`Meu nome é ${nome}, minha idade é ${idade}, e meu estilo musical é ${estilomusical}`);
  }
  
  informacaoExibir("Victor", "16", "Funk");

//06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

  function Exibirinformaçao(Filme,musica){
    console.log(`O filme ${Filme} é muito bom e a musica do Bk ${musica} também`)
  }
  Exibirinformaçao("Vigadores ultimado","Planos");


//07 - crie uma função que retorne o triplo do número recebido no parâmetro da função 

  function triploNumero(numero){
    return numero * 3;
  }
  let resultado = triploNumero(5);
  console.log(resultado);


//08 - crie uma função que  verifique se uma  variável é true ou false


      function verificaBooleano(valor) {
        if (typeof valor === 'boolean') {
        if (valor === true) {
        return "A variável é true.";
        } else {
        return "A variável é false.";
        }
      } else {
      return "A variável não é um booleano.";
    }
  }
  console.log(verificaBooleano(true));  
  console.log(verificaBooleano(false)); 
  console.log(verificaBooleano(42));

//09 - Crie um array que receba 5 itens e exiba no console.


  let compras = ["Arroz","Feijão","Chocolate","Batata","Carne"]
  console.log(compras);

//10 - Utilize um método para adicionar um nome ao inicio do array.

  compras.unshift("Frango","Macarrão");
  console.log(compras); 

 //11 - Utilize um método para remover o último nome do array.
  
  compras.pop()
  console.log(compras);


//12 - Utilize um método para adicionar dois nomes ao fim do array.

  compras.push("Açucar", "Manteiga");
  console.log(compras)


//13 - Utilize um método para remover o primeiro nome do array. 
  
  compras.shift()
  console.log(compras);


//14 - Utilize um método para organizar em ordem crescente o seguinte array: let numbers = [7,5,6,3,8,9,2,1,4]

  
  let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
  numbers.sort(function(a, b) {
  return a - b;
  });

  console.log(numbers);
  

//15 - Crie um objeto que receba ao menos três propriedades sobre você.

  
  let sobremin ={
    hobbies:"Arte circenses",
    comida:"Lasanha",
    Serie: "Riverdale"
  }

  console.log(sobremin)

//16 - Adicione uma nova propriedade sem alterar seu objeto inicial.


  sobremin.Comida = "Arroz,Feijão"
  console.log(sobremmin);

//17 - Remova uma propriedade desse objeto.

 delete sobremin.hobbies
 console.log(sobremin);

//18 - Mostre no console todas as propriedades desse objeto.

 for (const propriedade in sobremin) {
  if (sobremin.hasOwnProperty(propriedade)) {
    console.log(propriedade + ': ' + sobremin[propriedade]);
  }
}


//19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.Na propriedade amigos, adicione ao menos 4 amigos.


let cadastro = [
  {
    nome: "João",
    idade: 25,
    telefone: "123-456-7890",
    amigos: ["Maria", "Carlos", "Ana", "Pedro"]
  },
  {
    nome: "Maria",
    idade: 30,
    telefone: "987-654-3210",
    amigos: ["João", "Lucas", "Pedro", "Julia"]
  },
  {
    nome: "Carlos",
    idade: 22,
    telefone: "555-123-4567",
    amigos: ["Ana", "João", "Paula", "Rafael"]
  },
  {
    nome: "Ana",
    idade: 28,
    telefone: "333-999-8888",
    amigos: ["Carlos", "Pedro", "João", "Rafael"]
  },
  {
    nome: "Pedro",
    idade: 27,
    telefone: "777-222-1111",
    amigos: ["Maria", "Lucas", "João", "Carlos"]
  }
];
 console.log(cadastro);


//20 - Mostre no console o nome de um amigo de cada lista.

cadastro.forEach(pessoa => {
  if (pessoa.amigos.length > 0) {
    console.log(`${pessoa.nome} tem um amigo chamado ${pessoa.amigos[0]}`);
  } else {
    console.log(`${pessoa.nome} não tem amigos.`);
  }
});




















