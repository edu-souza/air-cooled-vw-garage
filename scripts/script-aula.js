/* function IsTruthy(valor){
    if (!!valor) {
        return 'É Truthy';
    } else {
        return 'Não é truthy';
    }
}

function perimetro(lado) {
    return lado * lado;
}

function nomeComp(nome,sobrenome) {
    let nomeCompleto = nome + ' ' + sobrenome;
    return nomeCompleto; 
}

function isEven(num) {
    if ((num % 2) === 0) {
        console.log('É par');
    } else {
        console.log('É ímpar');
    }
}

function showType(data) {
    return typeof(data);
}

function showName() {

    function mostraNome() {
        console.log('Eduardo de Sozua');
    }
    const corpo = window;
    corpo.addEventListener('scroll',function(){
        mostraNome();
    })
}
showName() */

/* function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    var totalPaises = 193;  
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20); */

/* let eu = {
    nome: 'Eduardo',
    sobrenome: ' de Souza',
    mostraNome() {
        return this.nome + this.sobrenome;
    } 
} */

/* var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  console.log(carro.preco)
  carro.preco = 3000;
  console.log(carro.preco) */

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
/* let cachorro = {
    raca: 'Labrador',
    cor : 'Preto',
    idade: 10,
    late(homem){
        if (homem) {
            return 'Viu um homem e latiu';
        } else {
            return 'Não viu um homem';
        }
    }
} 

altura = 1.8; */

/* Constructor functions */
//##################################
/* function dog(cor,raça) {
    this.cor = cor;
    this.raça = raça;
}

const cachorro = new dog('branco','pinscher'); */

/* const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativar() {
        const elementoSelecionado = this.element();
        this.element().classList.add('ativou');
    }
} */

// Transforme o objeto abaixo em uma Constructor Function
//*****************************************
/* function pessoa(nome,idade) {
    this.Seunome  = nome;
    this.Suaidade = idade;
    this.mostraPessoa = function() {
      console.log(this.Seunome + '' + this.Suaidade + 'anos');
    }
  }

  const eu = new pessoa('Eduardo',24);
  mostraPessoa()
   */
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

/*   function Dom(seletor) {
    this.elements = document.querySelectorAll(seletor),
    this.addClass = function(classe) {
        this.elements.forEach(item => {
            item.classList.add(classe);
        })
    },
    this.removeClass = function(classe) {
        this.elements.forEach(item => {
            item.classList.remove(classe);
        }
        )
    }
    
  }

  function Pessoa(nome,idade) {
      this.nome = nome;
      this.idade = idade;
  }

  const Edu = new Pessoa('Eduardo',18);

Pessoa.prototype.andar = function () {
    return this.nome + ' Pessoa andou';
}

const pais = 'Brasil'
const cidade = new String('Rio'); */
    
/* const carro = {
    marca: 'Ford',
    ano: 1950,
    andar: function(){},
} */
/* Exercícios Prototype */
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
//const li = document.querySelector('li');

/* li;
li.click;            function
li.innerText;        string
li.value;            number
li.hidden;           boolean
li.offsetLeft;       number
li.click();          boolean */

// Qual o construtor do dado abaixo:
//li.hidden.constructor.name;  string


/* function Pessoa(nome,sobrenome,idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}
Pessoa.prototype.nomeComp = function () {
    return this.nome + ' ' + this.sobrenome;
}
 */

/* const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  const Valores = Array.from(transacoes);
  let somaTaxa  = 0;
  let somaReceb = 0;
    Valores.forEach((item)=> {
        if(item.descricao.startsWith('Taxa')) {
            somaTaxa += +item.valor.slice(3);
        } else {
            somaReceb += +item.valor.slice(3);
        }
  })
 console.log(somaTaxa);
 console.log(somaReceb);  */

/*  // Substitua todos os span's por a's
const html = 
`<ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
</ul>`;

let aHtml = html.replace(/['span']+/g,'a'); */

/* const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1)); */

// Retorne o total de taxas
/* const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let QtdTaxa = 0;
const aTrans = Array.from(transacoes);

aTrans.forEach((item) => {
    if (item.trim().toUpperCase().startsWith('TAX')) {
        QtdTaxa++;
    }
})

console.log(QtdTaxa); */

/* const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const aTransp = transportes.split(';')
console.log(aTransp); */

/* EXERCÍCIOS NUMBERS E MATH */

// Retorne um número aleatório
// entre 1050 e 2000
//const Aleat = Math.floor(Math.random() * (2000 - 1050) + 1050)
//console.log(Aleat) ;

 // Retorne o maior número da lista abaixo
/* const numeros = '4, 5, 20, 8, 9';
let aNums = numeros.split(', ');
let aNumbs = []
aNums.forEach((item,index) => {
    aNumbs[index] = Number(item);
})
console.log(Math.max(...aNumbs)); */




// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
/* const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                   'R$ 230  ', 'r$  200']; 

const aLista = Array.from(listaPrecos);
let aNums = []
let Total = 0;
aLista.forEach((item,index) => {
    aNums[index] = Number.parseFloat(item.replace(/[',']+/g, '.').slice(3))
    Total += Number.parseFloat(aNums[index].toFixed(2));
})
console.log(aNums,Total)
 */