function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[_-]/g, ' '); // Substitui _ e - por espaço
}

const respostasHarryPotter = {
    // Respostas para "tudo bem" e variações
    "tudo bem": [
        "Tudo ótimo! Acabei de voltar de uma aula de Defesa Contra as Artes das Trevas. E com você?",
        "Estou muito bem! Hermione me ajudou com a lição de Poções hoje. Como você está?",
        "Tudo tranquilo! Estava praticando Quadribol com o time da Grifinória. E você?"
    ],
    
    // Respostas para confirmações positivas (quando o usuário responde que está bem)
    "tudo otimo": "Que bom! Fico feliz em saber!",
    "tudo certo": "Excelente! Vamos conversar sobre Hogwarts?",
    "tudo bem tambem": "Ótimo! Sobre o que você quer conversar?",
    "tudo tranquilo": "Legal! Me pergunta algo sobre magia!",

    // Básicos e cumprimentos
    "ola": "Olá! Eu sou Harry Potter. É um prazer te conhecer!",
    "oi": "Oi! Que bom ver você por aqui!",
    "como vai": "Estou muito bem! Aproveitando um momento tranquilo em Hogwarts. E você?",
    "como voce esta": "Estou ótimo! Hermione me ajudou com a lição de Poções hoje. Como você está?",

    // Lugares
    "hogwarts": "Hogwarts é minha verdadeira casa! É um castelo incrível com escadas que se movem!",
    "salao principal": "O Salão Principal é incrível! O teto é enfeitiçado para parecer o céu lá fora.",
    "torre grifinoria": "A Torre da Grifinória é muito aconchegante, especialmente nas noites frias.",
    "sala precisa": "A Sala Precisa aparece apenas quando realmente precisamos dela. Foi muito útil para a Armada de Dumbledore!",
    "floresta proibida": "A Floresta Proibida é perigosa... mas às vezes precisamos entrar lá.",

    // Personagens
    "hermione": "Hermione é a bruxa mais inteligente que já conheci! Sem ela, Ron e eu estaríamos perdidos.",
    "rony": "Rony é meu melhor amigo! A família dele é incrível, me tratam como um filho.",
    "ron": "Ron é meu melhor amigo! Foi a primeira pessoa que conheci no Expresso de Hogwarts.",
    "dumbledore": "Professor Dumbledore sempre me guiou... Ele é o maior bruxo que já conheci.",
    "snape": "Professor Snape... nossa relação é complicada, mas ele é um bruxo muito poderoso.",

    // Objetos mágicos
    "varinha": "Minha varinha tem núcleo de fênix, igual à de Você-Sabe-Quem...",
    "capa invisibilidade": "A Capa da Invisibilidade era do meu pai. Ela é muito útil para... er... estudar na biblioteca!",
    "mapa maroto": "Juro solenemente não fazer nada de bom! O Mapa do Maroto mostra todo o castelo.",
    "chapeu seletor": "O Chapéu Seletor é muito sábio! Ele pode ver dentro da sua mente e sabe exatamente em qual casa você se encaixaria melhor.",
    "chapeu": "O Chapéu Seletor é incrível! Quase me colocou na Sonserina, mas respeitou minha escolha pela Grifinória!",
    "chapeu pontudo": "O chapéu pontudo preto é parte do uniforme de Hogwarts. Todo bruxo tem um!",

    // Feitiços
    "expecto patronum": "Expecto Patronum! Meu patrono é um cervo, como meu pai.",
    "expelliarmus": "Expelliarmus é meu feitiço favorito para duelos!",
    "lumus": "Lumus é muito útil para explorar o castelo à noite... não que eu faça isso, claro.",
    "wingardium leviosa": "Wingardium Leviosa! Hermione sempre corrige nossa pronúncia.",
    "alohomora": "Alohomora é ótimo para... er... quando esquecemos a senha do dormitório!",

    // Resposta padrão
    "default": "Hmm... Não tenho certeza sobre isso. Talvez devêssemos perguntar para Hermione!",

    // Perguntas sobre preferências
    "quem voce mais gosta": "Tenho muitos amigos especiais em Hogwarts, mas Ron e Hermione são meus melhores amigos! Eles sempre estão ao meu lado em todas as aventuras.",
    "de quem voce gosta": "Ron e Hermione são as pessoas mais importantes para mim em Hogwarts! São meus melhores amigos e sempre posso contar com eles.",
    "seu melhor amigo": "Ron foi meu primeiro amigo em Hogwarts! Junto com Hermione, formamos um trio inseparável.",
    "sua pessoa favorita": "É difícil escolher apenas uma pessoa... Mas Ron e Hermione são meus melhores amigos, e considero a família Weasley como minha própria família!",

    // Infância e Família
    "seus pais": "Não tenho muitas memórias dos meus pais, apenas flashes... A mais forte é, infelizmente, da noite em que Voldemort os matou. Mas sei que eles me amavam muito e deram suas vidas para me proteger.",
    "dursley": "Os Dursleys... bem, eles nunca me trataram como família. Vivi embaixo de uma escada por anos e era tratado como um estorvo. Mas isso me fez valorizar ainda mais as verdadeiras amizades que fiz em Hogwarts.",
    "descobriu bruxo": "Foi incrível! Hagrid derrubou a porta da cabana onde tio Válter tinha nos levado e disse 'Harry, você é um bruxo!' Pela primeira vez na vida, tudo fez sentido - as coisas estranhas que aconteciam comigo, o porquê de eu ser diferente...",
    "infancia": "Minha infância com os Dursleys não foi fácil. Eu era diferente e eles me faziam sentir isso. Mas descobrir que era um bruxo mudou tudo.",
    "familia bruxa": "Às vezes me pergunto como seria ter crescido no mundo bruxo... Mas os Weasley me acolheram como um filho, e isso significa muito para mim.",
    "comparado voldemort": "É... perturbador. Temos algumas semelhanças, mas são nossas escolhas que nos definem, não nossas habilidades. Dumbledore me ajudou a entender isso.",

    // Hogwarts e Magia
    "primeira aula": "Minha primeira aula foi de Transfiguração com a Professora McGonagall. Foi impressionante vê-la se transformar de um gato para sua forma humana! Mas confesso que estava nervoso demais para fazer qualquer feitiço direito.",
    "materia favorita": "Defesa Contra as Artes das Trevas sempre foi minha matéria favorita, especialmente quando o Professor Lupin ensinava. Já Poções... bem, digamos que o Professor Snape não facilitava as coisas.",
    "feitico favorito": "Expecto Patronum é especial para mim. Não só me salvou dos dementadores, mas me conecta com meu pai, já que meu patrono é um cervo, como ele era.",
    "feitico dificil": "Expecto Patronum foi o mais difícil de aprender. É preciso se concentrar em uma memória verdadeiramente feliz, e isso nem sempre é fácil...",
    "professores": "Cada professor marcou minha vida de forma diferente. McGonagall sempre foi rígida mas justa, Lupin foi quem mais me ensinou sobre defesa, e Snape... bem, é complicado.",
    
    // Amizades e Relacionamentos
    "amizade ron hermione": "Ron e Hermione são mais que amigos, são família. Ron foi meu primeiro amigo de verdade, e Hermione... bem, sem ela provavelmente não teríamos sobrevivido ao primeiro ano! Passamos por tudo juntos.",
    "momento importante amizade": "Existem tantos... Mas quando Ron e Hermione decidiram vir comigo procurar as Horcruxes, abandonando tudo... Foi quando percebi que nossa amizade era mais forte que qualquer coisa.",
    "sobrevivido sem amigos": "Definitivamente não. Cada desafio que enfrentei, cada obstáculo... Foram meus amigos que me ajudaram a superar. Hermione com sua inteligência, Ron com sua lealdade... Não estaria aqui sem eles.",
    "torneio tribruxo": "Foi um dos momentos mais difíceis em Hogwarts. Eu não queria participar, tinha apenas 14 anos! E terminou da pior forma possível, com a morte de Cedrico...",
    
    // Guerra e Voldemort
    "momento assustador": "Ver Cedrico ser morto e Voldemort retornar no cemitério... Foi o momento em que percebi que a guerra era real e que pessoas inocentes morreriam.",
    "preocupacao guerra": "Minha maior preocupação sempre foi perder mais pessoas que eu amava. Já tinha perdido tantos... Meus pais, Sirius, Dumbledore... Cada perda era como reviver tudo de novo.",
    "decisao dificil": "A decisão mais difícil foi caminhar até a Floresta Proibida, sabendo que Voldemort me mataria. Mas era necessário para proteger todos que eu amava.",
    "perda entes queridos": "Cada perda me marcou profundamente. Fred, Tonks, Lupin... Eles deixaram um vazio que nunca será preenchido. Mas tento honrar suas memórias vivendo da maneira que eles gostariam.",

    // Futuro e Reflexões
    "planos futuro": "Depois de tudo, só quero uma vida tranquila. Talvez ser Auror, formar uma família... Já tive aventuras suficientes para uma vida inteira!",
    "ministerio magia": "O Ministério mudou muito desde a guerra. Se eu trabalhar lá, será para garantir que as coisas continuem melhorando.",
    "licao importante": "Que o amor é a magia mais poderosa que existe. Foi o amor da minha mãe que me salvou, e é o amor pelos meus amigos que me faz seguir em frente.",

    // Fama e Vida Pessoal
    "ser famoso": "Ser famoso nunca foi algo que eu quis. Às vezes é difícil, as pessoas me veem como 'O Menino que Sobreviveu', mas não conhecem realmente quem eu sou.",
    "privacidade": "A privacidade é muito importante para mim. Depois de tudo que passei, só quero momentos de paz com as pessoas que amo.",
    
    // Ordem da Fênix e Outros
    "ordem fenix": "A Ordem da Fênix representa esperança. São bruxas e bruxos dispostos a sacrificar tudo para lutar contra as Artes das Trevas. Meus pais faziam parte dela, assim como pessoas incríveis que conheci.",
    "comensais morte": "Os Comensais da Morte mostram como o preconceito e o ódio podem corromper as pessoas. É triste ver quanto mal eles causaram seguindo Voldemort.",
    "profecia": "A profecia... ela complicou muito minha vida, mas no final, foram minhas escolhas que importaram, não o destino.",

    // Diversos
    "animal magico": "Além da Edwiges? Bem, um fênix seria incrível, como a Fawkes do Dumbledore.",
    "lugar magico": "Além de Hogwarts? Adoraria conhecer melhor o Beco Diagonal, sem estar preocupado com Voldemort ou outras ameaças.",
    "doce favorito": "Os Sapos de Chocolate são ótimos, principalmente pelos cards dos bruxos famosos. Mas confesso que tenho um fraco pelos Feijõezinhos de Todos os Sabores... mesmo depois de pegar um com gosto de cera de ouvido!",

    // Hogwarts e Professores (expandido)
    "mcgonagall": "Professora McGonagall sempre foi rígida, mas justa. Ela se importava verdadeiramente com seus alunos e, mesmo que não demonstrasse muito, sei que ela tinha um carinho especial por mim.",
    "snape": "Snape... é complicado. Por anos o odiei, mas no final... Ele era o homem mais corajoso que já conheci. Sua história com minha mãe, tudo que ele fez... Mudou completamente minha visão sobre ele.",
    "lupin": "Professor Lupin foi o melhor professor de Defesa Contra as Artes das Trevas que tivemos. Ele me ensinou o Patrono e, mais que isso, me contou histórias sobre meus pais. Era como ter um pedaço deles comigo.",
    "hagrid": "Hagrid foi quem me apresentou ao mundo bruxo. Ele tem um coração enorme e uma lealdade incrível. Mesmo que às vezes seus 'bichinhos de estimação' sejam um pouco perigosos demais!",

    // Lugares em Hogwarts
    "sala comunal": "A Sala Comunal da Grifinória é como um segundo lar. Aquelas poltronas confortáveis perto da lareira... Passei tantas noites ali com Ron e Hermione, planejando nossas 'aventuras'.",
    "campo quadribol": "O campo de Quadribol... Lá foi onde realmente me senti livre pela primeira vez. Voar é uma sensação indescritível!",
    "biblioteca": "A biblioteca era o território da Hermione, mas acabei passando muito tempo lá também. Especialmente durante o Torneio Tribruxo... E a Madame Pince sempre nos olhando desconfiada!",
    "cozinha": "As cozinhas de Hogwarts são incríveis! Os elfos domésticos são tão prestativos... Mas não conte isso para a Hermione, ela ainda está determinada com o F.A.L.E.!",

    // Sentimentos e Reflexões
    "maior medo": "Meu maior medo? Os dementadores me mostraram isso - não é a morte em si, mas perder as pessoas que amo. É por isso que luto tanto para proteger meus amigos.",
    "maior orgulho": "Meu maior orgulho não são as coisas que fiz, mas as pessoas que conheci e as amizades que construí. Ver todos unidos contra Voldemort no final... Isso sim me deixa orgulhoso.",
    "arrependimento": "Me arrependo de não ter aprendido Oclumência direito... Talvez se tivesse me esforçado mais, Sirius... Bem, há muitas coisas que eu faria diferente.",
    "felicidade": "O que me faz feliz? Momentos simples com amigos, jogar Quadribol, saber que as pessoas que amo estão seguras... E claro, uma boa torta de caramelo da Sra. Weasley!",

    // Objetos Mágicos
    "mapa maroto": "O Mapa do Maroto foi um dos melhores presentes que já recebi! Fred e Jorge me deram... Ele mostrava todo o castelo e onde cada pessoa estava. 'Juro solenemente não fazer nada de bom!'",
    "capa invisibilidade": "A Capa da Invisibilidade era do meu pai... É uma das Relíquias da Morte, mas para mim, seu valor é sentimental. Me ajudou em tantas aventuras!",
    "vassoura": "Minha Firebolt foi um presente de Sirius. A melhor vassoura que já tive! Voar nela era como... como mágica, sabe?",
    "varinha": "Minha varinha... É engraçado como ela me escolheu. Irmã da varinha de Voldemort... Mas no final, foi essa conexão que ajudou a derrotá-lo.",

    // Quadribol
    "primeiro jogo": "Meu primeiro jogo de Quadribol foi assustador e emocionante ao mesmo tempo! Especialmente quando minha vassoura começou a tentar me derrubar... Depois descobrimos que era o Quirrell.",
    "posicao favorita": "Apanhador é a melhor posição! A emoção de procurar o pomo, a adrenalina da perseguição... Embora às vezes eu ache que Wood era um pouco obcecado demais com os treinos!",
    "time favorito": "Além da Grifinória? Bem, sempre admirei os Chudley Cannons, principalmente porque o Ron é fã... Mesmo que eles não ganhem há... bem, muito tempo!",

    // Comida
    "comida hogwarts": "Os banquetes de Hogwarts são incríveis! Especialmente o de boas-vindas... Nunca vou esquecer a primeira vez que vi toda aquela comida aparecer magicamente na mesa!",
    "sobremesa favorita": "A torta de melaço de Hogwarts é simplesmente a melhor coisa que já comi! Embora os doces da Dedosdemel também sejam fantásticos.",
    "cerveja amanteigada": "Cerveja amanteigada é perfeita nos dias frios em Hogsmeade! Especialmente no Três Vassouras, com Ron e Hermione..."
    
};

function analisarMensagem(mensagem) {
    const mensagemNormalizada = normalizarTexto(mensagem);
    const palavrasMensagem = mensagemNormalizada.split(' ');
    
    // Verifica se é uma resposta positiva do usuário
    const respostasPositivas = ['tudo otimo', 'tudo certo', 'tudo bem', 'tudo tranquilo'];
    if (respostasPositivas.some(resp => mensagemNormalizada.includes(resp))) {
        // Retorna uma resposta de fechamento para evitar loop
        return respostasHarryPotter[mensagemNormalizada] || "Que bom! Sobre o que você quer conversar?";
    }
    
    // Se for pergunta inicial de "tudo bem"
    if (mensagemNormalizada.includes('tudo bem')) {
        const respostas = respostasHarryPotter["tudo bem"];
        return respostas[Math.floor(Math.random() * respostas.length)];
    }
    
    let melhorResposta = null;
    let maiorPontuacao = 0;
    
    for (let chave in respostasHarryPotter) {
        const chaveNormalizada = normalizarTexto(chave);
        let pontuacao = 0;
        
        // Verifica se a chave completa está na mensagem
        if (mensagemNormalizada.includes(chaveNormalizada)) {
            pontuacao = 100;
        } else {
            // Verifica palavras individuais
            const palavrasChave = chaveNormalizada.split(' ');
            const palavrasEncontradas = palavrasChave.filter(palavra => 
                palavrasMensagem.some(palavraMensagem => 
                    palavraMensagem.includes(palavra) || palavra.includes(palavraMensagem)
                )
            );
            
            pontuacao = (palavrasEncontradas.length / palavrasChave.length) * 50;
        }
        
        // Atualiza a melhor resposta se encontrou uma pontuação maior
        if (pontuacao > maiorPontuacao) {
            maiorPontuacao = pontuacao;
            melhorResposta = respostasHarryPotter[chave];
        }
    }
    
    return melhorResposta || respostasHarryPotter.default;
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const messageText = document.createElement('p');
    messageText.textContent = message;
    
    messageDiv.appendChild(messageText);
    chatBox.appendChild(messageDiv);
    
    // Rola para a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message === '') return;

    appendMessage('user', message);
    userInput.value = '';
    
    const resposta = analisarMensagem(message);
    appendMessage('bot', resposta);
}

// Adiciona evento de clique no botão
document.querySelector('button').addEventListener('click', sendMessage);

// Adiciona evento de Enter no input
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Adiciona mensagem de boas-vindas quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        appendMessage('bot', "Olá! Eu sou Harry Potter, aluno de Hogwarts e membro da Grifinória! Estou muito feliz em te conhecer. Você pode me perguntar sobre Hogwarts, meus amigos, feitiços ou qualquer coisa do mundo mágico!");
    }, 1000); // Delay de 1 segundo para parecer mais natural
});
