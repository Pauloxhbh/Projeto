document.addEventListener('DOMContentLoaded', () => {

    // Dados das 89 questões normais do PDF
    const allQuestions = [
        { question: "Considere o código a seguir. Qual será o último valor armazenado na variável \"soma\" para o código a)?", image: "img/q1.png", options: { a: "8", b: "6", c: "0", d: "12" }, answer: "b", type: "normal" },
        { question: "Considere o código a seguir. Qual será o último valor armazenado na variável \"soma\" para o código b)?", image: "img/q2.png", options: { a: "8", b: "2", c: "12", d: "6" }, answer: "a", type: "normal" },
        { question: "Considere o código a seguir. Qual será o último valor armazenado na variável \"soma\" para o código c)?", image: "img/q3.png", options: { a: "6", b: "13", c: "8", d: "11" }, answer: "b", type: "normal" },
        { question: "O que o algoritmo apresentado na imagem faz?", image: "img/q4.png", options: { a: "Subtrai os números digitados até que o número zero seja digitado.", b: "Multiplica todos os números digitados.", c: "Calcula a média dos números digitados.", d: "Soma todos os números digitados até que o número zero seja digitado." }, answer: "d", type: "normal" },
        { question: "Qual é o valor inicial da variável \"soma\" no algoritmo?", options: { a: "1", b: "5", c: "0", d: "10" }, answer: "c", type: "normal" },
        { question: "Qual é o valor final da variável \"soma\" após a execução do algoritmo apresentado?", image: "img/q6.png", options: { a: "15", b: "20", c: "10", d: "5" }, answer: "a", type: "normal" },
        { question: "Qual é a condição de parada do loop \"while\" no algoritmo?", options: { a: "i > 5", b: "i < 5", c: "i >= 5", d: "i <= 5" }, answer: "d", type: "normal" },
        { question: "Quantas vezes o loop \"while\" é executado no algoritmo?", options: { a: "4 vezes", b: "5 vezes", c: "6 vezes", d: "7 vezes" }, answer: "b", type: "normal" },
        { question: "Qual é o resultado da soma de todos os números pares de 1 até 10?", options: { a: "20", b: "50", c: "30", d: "40" }, answer: "c", type: "normal" },
        { question: "Qual é a função em JavaScript usada para gerar um número aleatório entre 0 (inclusivo) e 1 (exclusivo)?", options: { a: "Math.round()", b: "Math.floor()", c: "Math.ceil()", d: "Math.random()" }, answer: "d", type: "normal" },
        { question: "O que faz a expressão Math.floor(x*10) no código JavaScript apresentado?", image: "img/q11.png", options: { a: "Retorna um número inteiro entre 1 e 10", b: "Retorna um número inteiro entre 0 e 9", c: "Retorna um número aleatório entre 0 e 1", d: "Retorna um número decimal entre 0 e 9" }, answer: "b", type: "normal" },
        { question: "Qual é o valor inicial de \"i\" para que o algoritmo mostre 5 números aleatórios entre 0e9?", options: { a: "0", b: "1", c: "10", d: "5" }, answer: "a", type: "normal" },
        { question: "Qual expressão completa a linha \"x = \" para gerar um decimal entre 0 e 1?", options: { a: "Math.round(Math.random())", b: "Math.random()", c: "Math.floor(10* Math.random())", d: "Math.ceil(Math.random())" }, answer: "b", type: "normal" },
        { question: "Qual é o valor que deve ser adicionado a \"i\" para incrementar o loop corretamente?", options: { a: "1", b: "10", c: "5", d: "2" }, answer: "a", type: "normal" },
        { question: "Qual função é usada para converter um número decimal em um inteiro entre 0 e 9?", options: { a: "Math.round(x*10)", b: "Math.ceil(x*10)", c: "Math.floor(x*10)", d: "Math.abs(x*10)" }, answer: "c", type: "normal" },
        { question: "Qual é a condição correta para o loop \"while\" parar no algoritmo apresentado?", image: "img/q16.png", options: { a: "sorteio !== 32", b: "x !== 32", c: "sorteio === 32", d: "x === 32" }, answer: "c", type: "normal" },
        { question: "Qual é a função utilizada para gerar um número decimal aleatório entre 0 e 1 no algoritmo?", options: { a: "Math.random()", b: "Math.round()", c: "Math.floor()", d: "Math.ceil()" }, answer: "a", type: "normal" },
        { question: "Como é calculado o valor de \"sorteio\" no algoritmo?", options: { a: "sorteio=Math.ceil(x*51)", b: "sorteio=Math.floor(x*51)", c: "sorteio=Math.round(x*51)", d: "sorteio=Math.random(x*51)" }, answer: "b", type: "normal" },
        { question: "Qual comando em JavaScript pode ser usado para arredondar um número decimal para o inteiro mais próximo?", options: { a: "Math.floor()", b: "Math.ceil()", c: "Math.abs()", d: "Math.round()" }, answer: "d", type: "normal" },
        { question: "O que acontece se a condição do loop while nunca for satisfeita?", options: { a: "O loop executa duas vezes", b: "O loop nunca é executado", c: "O loop executa apenas uma vez", d: "O loop executa infinitamente" }, answer: "b", type: "normal" },
        { question: "Para gerar um número inteiro aleatório entre 1 e 10, qual expressão é correta?", options: { a: "Math.round(Math.random()*10)", b: "Math.floor(Math.random()*10)+1", c: "Math.random() * 10", d: "Math.ceil(Math.random()*10)" }, answer: "b", type: "normal" },
        { question: "Qual comando pode ser usado para encerrar um loop while antes que a condição seja falsa?", options: { a: "break", b: "return", c: "exit", d: "continue" }, answer: "a", type: "normal" },
        { question: "Qual expressão pode ser usada para somar apenas os números impares de 1 a 10 em um loop?", options: { a: "if (i%2!==0){soma+=i;}", b: "if (i>5){soma+=i; }", c: "if (i % 2 === 0) { soma += i; }", d: "if f(i<5){soma+=i; }" }, answer: "a", type: "normal" },
        { question: "Quais são as formas que podemos realizar comentários javascript?", options: { a: "-Comentário 'Comentário", b: "/*Comentário*/ //Comentário", c: "", d: "'Comentário " }, answer: "b", type: "normal" },
        { question: "Em algumas situações necessitamos criar variáveis que não devem ser alteradas durante a execução de seu programa. Nestes casos, criamos...", options: { a: "variáveis inteiras", b: "condicionais", c: "constantes", d: "caracteres" }, answer: "c", type: "normal" },
        { question: "Em uma linguagem de programação, são usados para armazenar valores de dados.", options: { a: "tags", b: "variaveis", c: "arquivos", d: "códigos" }, answer: "b", type: "normal" },
        { question: "Qual expressão pode ser usada para verificar se um número é par dentro de um loop?", options: { a: "if (i/2==1)", b: "if (i%2===0)", c: "if (i*2==0)", d: "if (i==2)" }, answer: "b", type: "normal" },
        { question: "O que é um algoritmo e como ele se relaciona com a ideia de programação?", options: { a: "Uma sequência de passos organizada para resolver um problema.", b: "Uma linguagem usada apenas por matemáticos.", c: "Um sistema operacional que executa programas.", d: "Um código secreto usado para proteger dados em redes." }, answer: "a", type: "normal" },
        { question: "Por que a lógica é considerada uma ferramenta essencial na programação de computadores?", options: { a: "Porque ajuda o computador a traduzir textos automaticamente.", b: "Porque ela permite criar gráficos em páginas web.", c: "Porque permite organizar o raciocínio em sequência para resolver problemas.", d: "Porque facilita a instalação de programas no computador." }, answer: "c", type: "normal" },
        { question: "Qual a diferença entre um código HTML e um código JavaScript em uma página web?", options: { a: "HTML é usado para cálculos matemáticos, enquanto JavaScript é usado apenas para textos.", b: "HTML serve para conectar o computador à internet, e JavaScript serve para formatar o texto.", c: "HTML e JavaScript são a mesma coisa, usados apenas para mudar cores da tela.", d: "HTML estrutura o conteúdo da página, enquanto JavaScript adiciona comportamentos e interatividade." }, answer: "d", type: "normal" },
        { question: "O que acontece quando um comando em JavaScript é escrito com erro de sintaxe, como a falta de parênteses em alert?", options: { a: "O código para de funcionar e o navegador pode mostrar uma mensagem de erro.", b: "O erro é corrigido automaticamente pelo navegador.", c: "O navegador ignora o erro e continua o restante do código.", d: "O programa continua, mas com um visual diferente." }, answer: "a", type: "normal" },
        { question: "Para que serve a tag <br> dentro de um código HTML e como ela influencia a apresentação do conteúdo?", options: { a: "Serve para criar um link clicável.", b: "Serve para quebrar a linha e iniciar o conteúdo na linha de baixo.", c: "Serve para adicionar uma imagem à página.", d: "Serve para deixar o texto em negrito." }, answer: "b", type: "normal" },
        { question: "Para que serve o atributo id em um elemento HTML?", options: { a: "Para identificar o elemento e permitir sua manipulação via JavaScript.", b: "Para mudar a cor do elemento.", c: "Para esconder o elemento da tela.", d: "Para repetir o conteúdo do elemento várias vezes." }, answer: "a", type: "normal" },
        { question: "Qual comando do JavaScript permite referenciar um elemento HTML pelo seu ID, tag ou classe?", options: { a: "getHTML.query()", b: "document.getElement()", c: "document.querySelector()", d: "html.getID()" }, answer: "c", type: "normal" },
        { question: "O que é um evento em JavaScript?", options: { a: "Um arquivo HTML carregado.", b: "Um botão que muda de cor.", c: "Uma ação que pode acontecer na página, como um clique ou envio de formulário.", d: "Um tipo de erro do navegador." }, answer: "c", type: "normal" },
        { question: "Qual comando permite adicionar um \"ouvinte\" de evento a um elemento?", options: { a: "element.addCode()", b: "element.addEventListener()", c: "element.listenNow()", d: "element.onEvent()" }, answer: "b", type: "normal" },
        { question: "O que o método value faz em JavaScript?", options: { a: "Muda o fundo da página.", b: "Cria uma nova tag HTML automaticamente.", c: "Fecha a aba do navegador.", d: "Obtém o conteúdo digitado em um campo de formulário." }, answer: "d", type: "normal" },
        { question: "Para alterar um texto dentro de um elemento HTML, usamos qual comando?", options: { a: "element.innerValue", b: "element.newText()", c: "element.innerText", d: "element.alert()" }, answer: "c", type: "normal" },
        { question: "O que acontece quando usamos.addEventListener(\"click\", ...) em um botão?", options: { a: "Nada acontece, pois o comando está incompleto.", b: "O código dentro da função será executado quando o botão for clicado.", c: "O botão será excluído da página.", d: "O botão será ocultado automaticamente." }, answer: "b", type: "normal" },
        { question: "Como podemos garantir que um número com casas decimais seja exibido corretamente no JavaScript?", options: { a: "Usando Math.random()", b: "Usando console.log().", c: "Usando.toFixed() com o número de casas desejadas.", d: "Usando alert() sem ponto e vírgula." }, answer: "c", type: "normal" },
        { question: "Em um formulário que calcula a média entre duas notas, qual função devemos usar para converter os valores em números?", options: { a: "toString()", b: "digitOnly()", c: "Number()", d: "parseText()" }, answer: "c", type: "normal" },
        { question: "Para que serve uma estrutura de repetição como o while em programação?", options: { a: "Para apagar dados da memória.", b: "Para repetir um bloco de comandos enquanto a condição for verdadeira.", c: "Para executar comandos apenas uma vez", d: "Para formatar automaticamente o texto da tela." }, answer: "b", type: "normal" },
        { question: "Qual é a sintaxe correta de um comando while em JavaScript?", options: { a: "while (condição) { bloco de comandos }", b: "while=(condição){codigo}", c: "se (condição) então { comandos }", d: "while: { condição } faça { comandos }" }, answer: "a", type: "normal" },
        { question: "O que deve ser feito antes de iniciar um laço while com variável contadora?", options: { a: "Inicializar a variável contadora.", b: "Mostrar todos os resultados.", c: "Escrever o resultado no HTML.", d: "Finalizar o programa." }, answer: "a", type: "normal" },
        { question: "Quando a condição do while se torna falsa, o que acontece?", options: { a: "O laço é encerrado e o bloco de comandos para de ser executado.", b: "O programa reinicia automaticamente.", c: "O código entra em erro.", d: "O número de repetições é duplicado." }, answer: "a", type: "normal" },
        { question: "Como é chamada cada vez que o bloco do while é executado?", options: { a: "Contador automático", b: "Repetição falsa", c: "Reset do loop", d: "Iteração" }, answer: "d", type: "normal" },
        { question: "O que acontece se esquecermos de atualizar (incrementar/decrementar) a variável de controle dentro do while?", options: { a: "O while é ignorado.", b: "A variável vira constante.", c: "O código funciona normalmente.", d: "Pode causar um loop infinito." }, answer: "d", type: "normal" },
        { question: "Qual dessas opções representa corretamente uma condição de parada para um while que repete 5 vezes?", options: { a: "while (i>=5)", b: "while(i==5)", c: "while (i<5)", d: "while (i=5)" }, answer: "c", type: "normal" },
        { question: "Como podemos mostrar os números de 1 a 20 com while?", options: { a: "Usando if ao invés de while.", b: "Começando de 20 e subtraindo até 1.", c: "Começando de 1 e incrementando até 20.", d: "Usando uma variável acumuladora" }, answer: "c", type: "normal" },
        { question: "Em um loop que imprime números de 100 a 50, o que precisa acontecer com a variável contadora?", options: { a: "Ser substituída por uma constante.", b: "Ser decrementada até atingir 50.", c: "Ser incrementada a cada passo.", d: "Receber o valor 100 sempre." }, answer: "b", type: "normal" },
        { question: "Qual a função da tag <html> em um documento HTML?", options: { a: "Indicar o início e o fim do documento HTML.", b: "Mostrar gráficos do navegador.", c: "Deixar o fundo da página azul.", d: "Reproduzir vídeos automaticamente." }, answer: "a", type: "normal" },
        { question: "Para que serve a tag <head> em um arquivo HTML?", options: { a: "Reproduzir sons de fundo.", b: "Exibir parágrafos na tela.", c: "Mostrar imagens no corpo do site.", d: "Armazenar informações que não são exibidas diretamente na página." }, answer: "d", type: "normal" },
        { question: "O que a meta tag charset=\"UTF-8\" define em um documento HTML?", options: { a: "O tipo de conexão da internet.", b: "O tipo de vídeo que será usado.", c: "O padrão de codificação de caracteres, permitindo exibir acentos corretamente.", d: "O idioma principal da página." }, answer: "c", type: "normal" },
        { question: "Para que serve a tag <title> em uma página HTML?", options: { a: "Inserir imagem de fundo.", b: "Controlar o zoom da página", c: "Definir o botão principal da página.", d: "Exibir o título na aba do navegador." }, answer: "d", type: "normal" },
        { question: "Qual é a finalidade da tag <form> no HTML?", options: { a: "Criar tabelas automáticas.", b: "Formatar o tamanho da fonte.", c: "Trocar a cor do texto.", d: "Criar um formulário para entrada de dados." }, answer: "d", type: "normal" },
        { question: "A tag <input> é utilizada para:", options: { a: "Criar campos de entrada de dados em formulários.", b: "Escrever comentários na página.", c: "Criar botões de navegação.", d: "Inserir imagens de fundo." }, answer: "a", type: "normal" },
        { question: "O que acontece quando usamos <input type=\"submit\"> em um formulário?", options: { a: "Um vídeo é carregado.", b: "Os dados do formulário são enviados.", c: "Um novo site é aberto.", d: "Um alerta de erro é exibido." }, answer: "b", type: "normal" },
        { question: "Em que local da estrutura HTML normalmente colocamos o código JavaScript?", options: { a: "Dentro da tag <form>.", b: "Dentro da tag <script>.", c: "Entre as tags <h1> e <h2>.", d: "Dentro da tag <body>, entre <text>." }, answer: "b", type: "normal" },
        { question: "Qual das opções abaixo representa corretamente um editor que pode ser usado para programar HTML e JavaScript?", options: { a: "Visual Studio Code", b: "Windows Explorer", c: "Excel", d: "Paint" }, answer: "a", type: "normal" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Hora do código!", options: { a: "a", b: "b", c: "c", d: "d" }, answer: "a", type: "code" },
        { question: "Qual será o resultado da seguinte operação em JavaScript: alert('10' + 2*5)?", options: { a: "Erro de sintaxe", b: "20", c: "60", d: "1010" }, answer: "d", type: "normal" },
        { question: "Qual dos seguintes nomes de variáveis é INVÁLIDO em JavaScript?", options: { a: "_variavel", b: "minha Variavel", c: "$var", d: "var123" }, answer: "b", type: "normal" },
        { question: "No laço for (i = 0; i < 5; i++), quantas vezes o bloco de código interno será executado?", options: { a: "4 vezes", b: "5 vezes", c: "6 vezes", d: "Infinitas vezes" }, answer: "b", type: "normal" },
        { question: "Qual é a principal diferença entre let e const na declaração de variáveis?", options: { a: "let é para números e const é para strings.", b: "Não há diferença, são intercambiáveis.", c: "let tem escopo de função e const tem escopo de bloco.", d: "Variáveis com let podem ser reatribuídas, enquanto const não podem." }, answer: "d", type: "normal" },
        { question: "O que o operador % (módulo) faz em JavaScript?", options: { a: "Arredonda um número para o inteiro mais próximo.", b: "Divide um número pelo outro.", c: "Calcula a porcentagem de um número.", d: "Retorna o resto de uma divisão inteira." }, answer: "d", type: "normal" },
        { question: "Qual será a saída do código a seguir? document.write(5=='5')", options: { a: "true", b: "SyntaxError", c: "undefined", d: "false" }, answer: "a", type: "normal" },
        { question: "Para que serve a tag <script> em um arquivo HTML?", options: { a: "Para adicionar uma imagem à página.", b: "Para definir o estilo da página, como cores e fontes.", c: "Para inserir código JavaScript na página.", d: "Para criar um parágrafo de texto." }, answer: "c", type: "normal" },
        { question: "Qual função matemática é usada para arredondar um número para o inteiro mais próximo em JavaScript?", options: { a: "Math.ceil()", b: "Math.round()", c: "Math.floor()", d: "Math.random()" }, answer: "b", type: "normal" },
        { question: "Qual é o propósito do comando break dentro de um laço switch?", options: { a: "Para encerrar a execução do switch após um case correspondente ser executado.", b: "Para pular a iteração atual do laço.", c: "Para definir um valor padrão caso nenhum case corresponda.", d: "É obrigatório e não tem função, apenas sintaxe." }, answer: "a", type: "normal" },
        { question: "Qual o resultado da expressão lógica ! (true && false)?", options: { a: "true", b: "undefined", c: "false", d: "null" }, answer: "a", type: "normal" },
        { question: "No código let media = 7.5; let situacao = media >= 7 ? 'Aprovado': 'Reprovado', qual será o valor da variável situacao?", options: { a: "true", b: "undefined", c: "'Aprovado'", d: "'Reprovado'" }, answer: "c", type: "normal" },
        { question: "Qual método é usado para obter o conteúdo de um campo de formulário HTML em JavaScript?", options: { a: "value", b: ".textContent", c: ".innerText", d: ".innerHTML" }, answer: "a", type: "normal" },
        { question: "Em um laço while (condição) {...}, quando o bloco de código interno é executado?", options: { a: "Apenas enquanto a condição for avaliada como true.", b: "Pelo menos uma vez, e depois verifica a condição.", c: "Um número fixo de vezes, definido antes do laço.", d: "Apenas quando a condição se torna false." }, answer: "a", type: "normal" },
        { question: "Para que serve o comando e.preventDefault() dentro de um addEventListener('submit')?", options: { a: "Para estilizar o formulário com CSS.", b: "Para validar os campos do formulário.", c: "Para limpar os campos do formulário após o envio.", d: "Para evitar o envio do formulário e o recarregamento da página." }, answer: "d", type: "normal" },
        { question: "Qual dos operadores a seguir é um operador lógico 'OU?.", options: { a: "!=", b: "||", c: "!", d: "&&" }, answer: "b", type: "normal" },
        { question: "O que a função Number(prompt('...')) faz?", options: { a: "Verifica se o valor digitado é um número, retornando true ou false.", b: "Cria um campo de entrada numérico na página HTML.", c: "Apenas exibe uma mensagem para o usuário.", d: "Exibe uma mensagem e converte o texto digitado pelo usuário para tipo número." }, answer: "d", type: "normal" },
        { question: "Em uma estrutura if-else else if, quando o bloco else final é executado?", options: { a: "Sempre que a primeira condição if for falsa.", b: "Apenas se todas as condições if e else if forem verdadeiras.", c: "Apenas se todas as condições if e else if anteriores forem falsas.", d: "É executado junto com o primeiro if que for verdadeiro." }, answer: "c", type: "normal" },
        { question: "Qual é o propósito da propriedade id em uma tag HTML?", options: { a: "Indica a ordem do elemento na página.", b: "Cria um identificador único para o elemento.", c: "Aplica um estilo CSS diretamente ao elemento.", d: "Define o texto que será exibido dentro da tag." }, answer: "b", type: "normal" },
        { question: "Qual será o valor final da variável soma? let soma = 0; for (let i = 1; i <= 3; i++) { soma = soma + i; }", options: { a: "0", b: "5", c: "3", d: "6" }, answer: "d", type: "normal" },
        { question: "Qual a forma correta de escrever um comentário de UMA linha em JavaScript?", options: { a: "// Este é um comentário", b: "Este é um comentário", c: "/* Este é um comentário */", d: "** Este é um comentário **" }, answer: "a", type: "normal" },
        { question: "Um algoritmo é definido como:", options: { a: "Uma sequência finita e lógica de passos para resolver um problema.", b: "O código fonte de uma página da web.", c: "Uma linguagem de programação.", d: "Um programa de computador já compilado." }, answer: "a", type: "normal" },
        { question: "O que significa dizer que JavaScript é 'Case Sensitive'?", options: { a: "Que ele não diferencia letras maiúsculas de minúsculas.", b: "Que ele é sensível a erros de digitação.", c: "Que ele diferencia letras maiúsculas de minúsculas.", d: "Que o código só pode ser escrito em letras maiúsculas." }, answer: "c", type: "normal" },
        { question: "Qual a função do return em uma função JavaScript?", options: { a: "Para declarar uma nova variável dentro da função.", b: "Para encerrar a execução da função e, opcionalmente, especificar um valor a ser retornado.", c: "Para chamar outra função.", d: "Para imprimir um valor no console." }, answer: "b", type: "normal" },
        { question: "O que o método .toFixed(2) faz com um número, por exemplo, 12.3456.toFixed(2)?", options: { a: "Arredonda o número para 2.", b: "Retorna os dois últimos dígitos do número.", c: "Formata o número como uma string, mantendo exatamente duas casas decimais.", d: "Multiplica o número por 2." }, answer: "c", type: "normal" },
        { question: "Qual é o resultado de typeof true em JavaScript?", options: { a: "'number'", b: "'boolean'", c: "'undefined'", d: "'string'" }, answer: "b", type: "normal" },
        { question: "Para que serve o default: em uma instrução switch?", options: { a: "É o primeiro caso a ser verificado, antes de todos os outros.", b: "Encerra a execução do switch, similar ao break.", c: "Define o valor padrão para a variável que está sendo testada.", d: "Executa um bloco de código se nenhum dos outros case for correspondido." }, answer: "d", type: "normal" },
        { question: "Qual a maneira correta de comparar se duas variáveis, a e b, são estritamente iguais em valor E tipo?", options: { a: "a=b", b: "a==b", c: "a===b", d: "a!=b" }, answer: "c", type: "normal" },
        { question: "O que Math.pow(4,2) retorna?", options: { a: "6", b: "2", c: "16", d: "8" }, answer: "c", type: "normal" },
        { question: "Como você cria um laço que executa enquanto x for menor que 10?", options: { a: "while (x<10)", b: "for(x<10)", c: "if (x<10) { loop }", d: "loop (x<10)" }, answer: "a", type: "normal" },
        { question: "Qual tag HTML é usada para criar um link para outra página?", options: { a: "<p>", b: "<a>", c: "<link>", d: "<h1>" }, answer: "b", type: "normal" }
    ];

    // Variáveis de controle
    let currentQuestionIndex = 0;
    let shuffledQuestions = [];
    let timerInterval;
    let isPaused = false;
    let isMinus2Used = false;
    const NORMAL_TIME = 30;
    const CODE_TIME = 180;
    const tableStateKey = 'gincanaTableState';

    // Seletores do DOM
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const timerDisplay = document.getElementById('timer');
    const minus2Btn = document.getElementById('minus2-btn');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const nextBtn = document.getElementById('next-btn');
    const codeBlock = document.getElementById('code-block');
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-button');
    const gameInterface = document.getElementById('game-interface');
    const resetButton = document.getElementById('reset-button');
    const table = document.querySelector('table');

    // Funções de Utilitário
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function saveState() {
        localStorage.setItem('gameQuestions', JSON.stringify(shuffledQuestions));
        localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
        localStorage.setItem(tableStateKey, JSON.stringify(getCellsState()));
    }

    function getCellsState() {
        const state = {};
        const tableCells = document.querySelectorAll('table td');
        tableCells.forEach((cell, index) => {
            state[index] = cell.textContent;
        });
        return state;
    }

    function loadState() {
        const savedQuestions = localStorage.getItem('gameQuestions');
        const savedIndex = localStorage.getItem('currentQuestionIndex');
        const savedTableState = localStorage.getItem(tableStateKey);

        if (savedQuestions && savedIndex !== null) {
            shuffledQuestions = JSON.parse(savedQuestions);
            currentQuestionIndex = parseInt(savedIndex);
            if (savedTableState) {
                setCellsState(JSON.parse(savedTableState));
            }
            return true;
        }
        return false;
    }

    function setCellsState(state) {
        const tableCells = document.querySelectorAll('table td');
        tableCells.forEach((cell, index) => {
            cell.textContent = state[index];
        });
    }

    function resetGame() {
        if (confirm('Tem certeza que deseja reiniciar o jogo? O progresso será perdido.')) {
            localStorage.clear();
            location.reload();
        }
    }

    // Lógica principal do jogo
    function startNewGame() {
        shuffledQuestions = shuffle(allQuestions);
        currentQuestionIndex = 0;
        table.innerHTML = `<tr class="header-row"><th></th><th>A</th><th>B</th><th>C</th><th>D</th></tr><tr><th>V</th><td></td><td></td><td></td><td></td></tr><tr><th>M</th><td></td><td></td><td></td><td></td></tr><tr><th>-2</th><td></td><td></td><td></td><td></td></tr><tr><th>R</th><td></td><td></td><td></td><td></td></tr><tr><th>C</th><td></td><td></td><td></td><td></td></tr>`;
        const tableCells = document.querySelectorAll('table td');
        tableCells.forEach(cell => {
            if (cell.closest('.header-row')) return;
            cell.addEventListener('click', handleCellClick);
        });
        saveState();
        displayQuestion();
    }

    // Novo handler de clique para as células da tabela
    function handleCellClick(event) {
        const cell = event.target;
        if (cell.textContent === '') {
            cell.textContent = 'X';
            saveState();
        } else {
            cell.textContent = '';
            saveState();
        }
    }

    function startTimer(duration) {
        let timeLeft = duration;
        timerDisplay.textContent = formatTime(timeLeft);
        timerInterval = setInterval(() => {
            if (!isPaused) {
                timeLeft--;
                timerDisplay.textContent = formatTime(timeLeft);
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    alert("Tempo esgotado!");
                }
            }
        }, 1000);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    function displayQuestion() {
        if (currentQuestionIndex >= shuffledQuestions.length) {
            alert("Fim das questões! Pressione 'Reiniciar Jogo' para começar de novo.");
            return;
        }
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;

        // Se a pergunta tiver uma imagem, crie e exiba a tag <img>
        const imgElement = document.getElementById('question-image');
        if (currentQuestion.image) {
            if (!imgElement) {
                const newImg = document.createElement('img');
                newImg.id = 'question-image';
                newImg.src = currentQuestion.image;
                newImg.style.maxWidth = '100%';
                newImg.style.marginTop = '10px';
                newImg.style.marginBottom = '20px';
                questionText.after(newImg);
            } else {
                imgElement.src = currentQuestion.image;
                imgElement.style.display = 'block';
            }
        } else {
            if (imgElement) {
                imgElement.style.display = 'none';
            }
        }

        if (currentQuestion.type === 'code') {
            codeBlock.style.display = 'block';
            codeBlock.textContent = currentQuestion.code;
        } else {
            codeBlock.style.display = 'none';
            codeBlock.textContent = '';
        }

        optionsContainer.innerHTML = '';
        for (const [key, value] of Object.entries(currentQuestion.options)) {
            const optionBox = document.createElement('div');
            optionBox.classList.add('option-box');
            optionBox.dataset.option = key;
            optionBox.textContent = `${key.toUpperCase()}) ${value}`;
            optionsContainer.appendChild(optionBox);
            optionBox.addEventListener('click', () => handleOptionClick(optionBox));
        }

        clearInterval(timerInterval);
        const timeToSet = currentQuestion.type === 'code' ? CODE_TIME : NORMAL_TIME;
        startTimer(timeToSet);

        minus2Btn.style.pointerEvents = 'auto';
        saveState();
    }

    // Lógica do botão -2
    minus2Btn.addEventListener('click', () => {
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        const correctAnswer = currentQuestion.answer;
        const incorrectOptions = Object.keys(currentQuestion.options).filter(opt => opt !== correctAnswer);
        const optionsToRemove = [];
        while (optionsToRemove.length < 2) {
            const randomIndex = Math.floor(Math.random() * incorrectOptions.length);
            const option = incorrectOptions[randomIndex];
            if (!optionsToRemove.includes(option)) {
                optionsToRemove.push(option);
            }
        }
        optionsToRemove.forEach(optionKey => {
            const optionElement = document.querySelector(`.option-box[data-option="${optionKey}"]`);
            if (optionElement) {
                optionElement.classList.add('disabled');
                optionElement.textContent = '❌';
                optionElement.style.pointerEvents = 'none';
            }
        });
        minus2Btn.style.pointerEvents = 'none';
    });

    // Lógica para pausar/continuar o tempo
    playPauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        playPauseBtn.textContent = isPaused ? '►' : '❚❚';
    });

    // Lógica para passar para a próxima questão
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            alert("Fim das questões! Pressione 'Reiniciar Jogo' para começar de novo.");
        }
    });

    // Lida com o clique nas opções
    function handleOptionClick(optionElement) {
        const selectedOption = optionElement.dataset.option;
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        const correctAnswer = currentQuestion.answer;

        // Pausa o timer
        clearInterval(timerInterval);

        document.querySelectorAll('.option-box').forEach(option => {
            option.style.pointerEvents = 'none';
            if (option.dataset.option === correctAnswer) {
                option.style.backgroundColor = '#28a745'; // Cor verde para a resposta correta
                option.style.color = 'white';
            } else if (option.dataset.option === selectedOption) {
                option.style.backgroundColor = '#dc3545'; // Cor vermelha para a resposta errada
                option.style.color = 'white';
            }
        });
    }

    // Lógica para iniciar o jogo ao clicar no botão
    startButton.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        gameInterface.classList.remove('hidden');
        resetButton.style.display = 'block';
        startNewGame();
    });

    // Lógica do botão de reiniciar
    resetButton.addEventListener('click', resetGame);

    // Carrega o jogo salvo ou inicia a tela de início
    if (loadState()) {
        startScreen.classList.add('hidden');
        gameInterface.classList.remove('hidden');
        resetButton.style.display = 'block';
        const tableCells = document.querySelectorAll('table td');
        tableCells.forEach(cell => {
            if (cell.closest('.header-row')) return;
            cell.addEventListener('click', handleCellClick);
        });
        displayQuestion();
    } else {
        startScreen.classList.remove('hidden');
        gameInterface.classList.add('hidden');
    }
});