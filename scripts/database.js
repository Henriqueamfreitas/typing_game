let phrases = [
    {
        id: 0,
        phrase: "Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer", 
    },

    {
        id: 1,
        phrase: "Os problemas são oportunidades para se mostrar o que sabe", 
    },

    {
        id: 2,
        phrase: "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos", 
    },
    
    {
        id: 3,
        phrase: "Tente de novo. Fracasse de novo. Mas fracasse melhor", 
    },
    
    {
        id: 4,
        phrase: "É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo", 
    },
    
    {
        id: 5,
        phrase: "O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido", 
    },
    
    {
        id: 6,
        phrase: "Cada cliente é como se fosse primeiro e único", 
    },
    
    {
        id: 7,
        phrase: "Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer", 
    },
    
    {
        id: 8,
        phrase: "Vender é construir uma ponte entre você e seu cliente e fazê-lo atravessar para o seu lado", 
    },
    
    {
        id: 9,
        phrase: "Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos", 
    },
]

const textTest = document.querySelector(".textTest")
let numeroAleatorio = Math.floor(Math.random() * 6) ;

const selectedPhrase = phrases[numeroAleatorio].phrase
textTest.innerHTML = selectedPhrase