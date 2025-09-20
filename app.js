// Dados da aplicação
const appData = {
    teoria: {
        linguagem_objetiva: {
            definicao: "A linguagem objetiva apresenta informações de forma imparcial, clara e direta, sem incluir opiniões pessoais ou juízos de valor. Baseia-se em factos verificáveis e utiliza o sentido denotativo das palavras.",
            caracteristicas: [
                "Utiliza factos concretos e dados verificáveis",
                "Emprega linguagem denotativa (sentido literal)",
                "Evita adjetivos subjetivos",
                "Usa terceira pessoa",
                "Tom imparcial e neutro",
                "Finalidade informativa"
            ],
            onde_encontrar: [
                "Notícias jornalísticas",
                "Textos científicos",
                "Manuais de instruções",
                "Relatórios técnicos",
                "Bulas de medicamentos",
                "Documentos oficiais"
            ]
        },
        linguagem_subjetiva: {
            definicao: "A linguagem subjetiva expressa opiniões, sentimentos e impressões pessoais do autor. Utiliza o sentido conotativo das palavras e inclui juízos de valor e interpretações pessoais.",
            caracteristicas: [
                "Expressa opiniões e sentimentos",
                "Emprega linguagem conotativa (sentido figurado)",
                "Rica em adjetivos valorativos",
                "Pode usar primeira pessoa",
                "Tom pessoal e emotivo",
                "Finalidade expressiva ou persuasiva"
            ],
            onde_encontrar: [
                "Textos literários",
                "Crónicas",
                "Artigos de opinião",
                "Críticas de cinema/livros",
                "Publicidade",
                "Cartas pessoais"
            ]
        }
    },
    exemplos: [
        {
            tema: "Descrição de uma escola",
            objetiva: "A escola tem 2000 alunos, 80 professores, três blocos de aulas e uma biblioteca com 5000 livros.",
            subjetiva: "A nossa escola é um verdadeiro lar de aprendizagem, onde cada corredor ecoa com risos alegres e cada sala respira conhecimento e esperança."
        },
        {
            tema: "Descrição do tempo",
            objetiva: "Hoje a temperatura é de 25°C, com céu limpo e vento de 10 km/h.",
            subjetiva: "Que manhã gloriosa! O sol dourado acaricia suavemente o rosto e a brisa fresca sussurra melodias de primavera."
        },
        {
            tema: "Descrição de um livro",
            objetiva: "O livro tem 300 páginas, foi publicado em 2020 e pertence ao género romance.",
            subjetiva: "Esta obra é uma viagem emocionante através das profundezas da alma humana, um tesouro literário que nos transporta para mundos de sonho."
        },
        {
            tema: "Descrição de um restaurante",
            objetiva: "O restaurante tem 50 lugares, serve comida italiana e funciona das 12h às 23h.",
            subjetiva: "Este cantinho mágico é um pedacinho da Itália no nosso coração, onde cada prato é uma obra de arte culinária que desperta os sentidos."
        },
        {
            tema: "Descrição de um cão",
            objetiva: "O cão é da raça Golden Retriever, tem 3 anos e pesa 30 quilos.",
            subjetiva: "Este anjo de quatro patas é o companheiro mais leal e carinhoso, com olhos doces que falam diretamente à alma."
        },
        {
            tema: "Descrição de um concerto",
            objetiva: "O concerto teve lugar no pavilhão municipal, durou 2 horas e contou com 500 espetadores.",
            subjetiva: "Foi uma noite mágica e inesquecível, onde a música tocou o coração de todos e criou memórias eternas de pura emoção."
        }
    ],
    exercicios: {
        identificacao: [
            {
                texto: "O cão ladrou durante toda a noite.",
                resposta: "objetiva",
                explicacao: "Apresenta um facto concreto sem opinião pessoal."
            },
            {
                texto: "Aquele cão é um verdadeiro anjo de quatro patas.",
                resposta: "subjetiva",
                explicacao: "Expressa uma opinião pessoal usando linguagem figurada."
            },
            {
                texto: "A temperatura da água é de 20°C.",
                resposta: "objetiva",
                explicacao: "Informa um dado mensurável e verificável."
            },
            {
                texto: "A água estava deliciosamente fresca e convidativa.",
                resposta: "subjetiva",
                explicacao: "Expressa sensações e impressões pessoais."
            },
            {
                texto: "O filme tem duração de 120 minutos.",
                resposta: "objetiva",
                explicacao: "Fornece informação factual e mensurável."
            },
            {
                texto: "Este filme é uma obra-prima cinematográfica inesquecível.",
                resposta: "subjetiva",
                explicacao: "Expressa uma opinião pessoal sobre a qualidade do filme."
            },
            {
                texto: "O livro foi publicado pela Editora Moderna em 2023.",
                resposta: "objetiva",
                explicacao: "Apresenta dados factuais sobre a publicação."
            },
            {
                texto: "Esta história tocou profundamente o meu coração e mudou a minha vida.",
                resposta: "subjetiva",
                explicacao: "Expressa sentimentos e impacto pessoal."
            },
            {
                texto: "A reunião começou às 14h30 e terminou às 16h00.",
                resposta: "objetiva",
                explicacao: "Informa horários precisos e verificáveis."
            },
            {
                texto: "Foi a reunião mais produtiva e inspiradora de sempre!",
                resposta: "subjetiva",
                explicacao: "Expressa uma avaliação pessoal com tom emotivo."
            }
        ],
        transformacao: [
            {
                subjetiva: "Esta casa é um verdadeiro palácio!",
                objetiva_sugestao: "Esta casa tem 200m², 4 quartos e 3 casas de banho."
            },
            {
                subjetiva: "O professor é o melhor do mundo!",
                objetiva_sugestao: "O professor leciona há 15 anos e tem mestrado em Língua Portuguesa."
            },
            {
                subjetiva: "A comida estava absolutamente divinal e irresistível!",
                objetiva_sugestao: "O prato continha arroz, frango grelhado e legumes variados."
            }
        ]
    },
    quiz: [
        {
            pergunta: "Qual é a principal característica da linguagem objetiva?",
            opcoes: [
                "Expressa sentimentos pessoais",
                "Utiliza muitos adjetivos",
                "Apresenta factos de forma imparcial",
                "Usa linguagem figurada"
            ],
            resposta_correta: 2,
            explicacao: "A linguagem objetiva caracteriza-se por apresentar factos de forma imparcial, sem opinião pessoal."
        },
        {
            pergunta: "Em que tipo de texto é mais comum encontrar linguagem subjetiva?",
            opcoes: [
                "Manuais técnicos",
                "Notícias",
                "Crónicas literárias",
                "Relatórios científicos"
            ],
            resposta_correta: 2,
            explicacao: "As crónicas literárias são textos onde o autor expressa opiniões e sentimentos pessoais."
        },
        {
            pergunta: "Qual destas frases utiliza linguagem objetiva?",
            opcoes: [
                "O sol brilha majestosamente no céu azul",
                "A temperatura atual é de 22°C",
                "Que dia maravilhoso e inspirador!",
                "O vento sussurra doces melodias"
            ],
            resposta_correta: 1,
            explicacao: "A temperatura é um dado mensurável e factual, característico da linguagem objetiva."
        },
        {
            pergunta: "A linguagem conotativa é típica de:",
            opcoes: [
                "Linguagem objetiva",
                "Linguagem subjetiva",
                "Ambas as linguagens",
                "Nenhuma das anteriores"
            ],
            resposta_correta: 1,
            explicacao: "A linguagem conotativa (sentido figurado) é característica da linguagem subjetiva."
        },
        {
            pergunta: "Qual é o objetivo principal da linguagem objetiva?",
            opcoes: [
                "Expressar sentimentos",
                "Persuadir o leitor",
                "Informar de forma neutra",
                "Criar beleza artística"
            ],
            resposta_correta: 2,
            explicacao: "A linguagem objetiva tem como principal objetivo informar de forma neutra e imparcial."
        },
        {
            pergunta: "Em que pessoa verbal é mais comum escrever textos objetivos?",
            opcoes: [
                "Primeira pessoa",
                "Segunda pessoa",
                "Terceira pessoa",
                "Todas são igualmente usadas"
            ],
            resposta_correta: 2,
            explicacao: "A terceira pessoa confere imparcialidade e neutralidade aos textos objetivos."
        },
        {
            pergunta: "Qual tipo de adjetivos é mais comum na linguagem subjetiva?",
            opcoes: [
                "Adjetivos neutros",
                "Adjetivos descritivos",
                "Adjetivos valorativos",
                "Adjetivos técnicos"
            ],
            resposta_correta: 2,
            explicacao: "Os adjetivos valorativos expressam opiniões e juízos de valor, típicos da linguagem subjetiva."
        },
        {
            pergunta: "Onde é mais provável encontrar linguagem objetiva?",
            opcoes: [
                "Numa carta de amor",
                "Numa notícia de jornal",
                "Num poema",
                "Numa crítica de cinema"
            ],
            resposta_correta: 1,
            explicacao: "As notícias de jornal devem ser imparciais e factuais, usando linguagem objetiva."
        },
        {
            pergunta: "A linguagem denotativa refere-se a:",
            opcoes: [
                "Sentido figurado das palavras",
                "Sentido literal das palavras",
                "Opinião pessoal do autor",
                "Sentimentos expressos no texto"
            ],
            resposta_correta: 1,
            explicacao: "A linguagem denotativa usa o sentido literal das palavras, típica da linguagem objetiva."
        },
        {
            pergunta: "Qual destas características NÃO é da linguagem subjetiva?",
            opcoes: [
                "Tom emotivo",
                "Uso da primeira pessoa",
                "Linguagem figurada",
                "Dados estatísticos"
            ],
            resposta_correta: 3,
            explicacao: "Os dados estatísticos são factuais e objetivos, não característicos da linguagem subjetiva."
        },
        {
            pergunta: "O que torna um texto imparcial?",
            opcoes: [
                "Uso de adjetivos expressivos",
                "Ausência de opinião pessoal",
                "Tom emotivo",
                "Linguagem figurada"
            ],
            resposta_correta: 1,
            explicacao: "A ausência de opinião pessoal garante a imparcialidade característica da linguagem objetiva."
        },
        {
            pergunta: "Em que contexto usarias linguagem subjetiva?",
            opcoes: [
                "Relatório médico",
                "Manual de instruções",
                "Diário pessoal",
                "Documento oficial"
            ],
            resposta_correta: 2,
            explicacao: "O diário pessoal é um espaço para expressar sentimentos e opiniões pessoais."
        },
        {
            pergunta: "A finalidade persuasiva é típica de:",
            opcoes: [
                "Linguagem objetiva",
                "Linguagem subjetiva",
                "Textos científicos",
                "Relatórios técnicos"
            ],
            resposta_correta: 1,
            explicacao: "A linguagem subjetiva pode ter finalidade persuasiva, tentando convencer o leitor."
        },
        {
            pergunta: "Qual frase exemplifica melhor a linguagem subjetiva?",
            opcoes: [
                "O evento teve 200 participantes",
                "A reunião durou 3 horas",
                "Foi a experiência mais enriquecedora da minha vida",
                "O produto custa 50 euros"
            ],
            resposta_correta: 2,
            explicacao: "Esta frase expressa uma opinião pessoal e valorativa sobre a experiência."
        },
        {
            pergunta: "Para tornar um texto mais objetivo, deves:",
            opcoes: [
                "Adicionar mais adjetivos",
                "Usar mais linguagem figurada",
                "Apresentar dados concretos",
                "Expressar mais sentimentos"
            ],
            resposta_correta: 2,
            explicacao: "Os dados concretos tornam o texto mais factual e objetivo."
        }
    ]
};

// Estado global da aplicação
let appState = {
    currentSection: 'inicio',
    progress: 0,
    exerciseScores: {
        identificacao: null,
        transformacao: null,
        criacao: null
    },
    quizScore: null,
    quizAnswers: [],
    currentQuizQuestion: 0
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadExamples();
    loadIdentificationExercise();
    loadTransformationExercise();
    loadProgress();
});

function initializeApp() {
    // Event listeners para navegação
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            goToSection(section);
        });
    });

    // Event listeners para exercícios
    const exerciseTabs = document.querySelectorAll('.exercise-tab');
    exerciseTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const exercise = this.getAttribute('data-exercise');
            showExercise(exercise);
        });
    });

    updateProgress();
}

function goToSection(sectionId) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Mostrar seção selecionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.add('fade-in-up');
        
        setTimeout(() => {
            targetSection.classList.remove('fade-in-up');
        }, 500);
    }
    
    // Atualizar navegação
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeButton = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    appState.currentSection = sectionId;
    updateProgress();
    saveProgress();
}

function updateProgress() {
    const sections = ['inicio', 'teoria', 'exemplos', 'exercicios', 'quiz', 'resumo'];
    const currentIndex = sections.indexOf(appState.currentSection);
    const progress = ((currentIndex + 1) / sections.length) * 100;
    
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
    
    appState.progress = progress;
}

function startLearning() {
    goToSection('teoria');
}

// Carregar exemplos interativos
function loadExamples() {
    const container = document.getElementById('examplesContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    appData.exemplos.forEach((exemplo, index) => {
        const exampleCard = document.createElement('div');
        exampleCard.className = 'example-card';
        
        exampleCard.innerHTML = `
            <div class="example-header">
                <h3>${exemplo.tema}</h3>
            </div>
            <div class="example-content">
                <div class="example-text example-objetiva" id="obj-${index}">
                    ${exemplo.objetiva}
                </div>
                <div class="example-toggle">
                    <button class="toggle-btn objetiva active" onclick="showObjective(${index})">
                        🎯 Objetiva
                    </button>
                    <button class="toggle-btn subjetiva" onclick="showSubjective(${index})">
                        🎨 Subjetiva
                    </button>
                </div>
                <div class="example-text example-subjetiva" id="subj-${index}" style="display: none;">
                    ${exemplo.subjetiva}
                </div>
            </div>
        `;
        
        container.appendChild(exampleCard);
    });
}

function showObjective(index) {
    const objElement = document.getElementById(`obj-${index}`);
    const subjElement = document.getElementById(`subj-${index}`);
    const objBtn = document.querySelector(`.example-card:nth-child(${index + 1}) .toggle-btn.objetiva`);
    const subjBtn = document.querySelector(`.example-card:nth-child(${index + 1}) .toggle-btn.subjetiva`);
    
    objElement.style.display = 'flex';
    subjElement.style.display = 'none';
    
    objBtn.classList.add('active');
    subjBtn.classList.remove('active');
    
    objElement.classList.add('bounce');
    setTimeout(() => objElement.classList.remove('bounce'), 1000);
}

function showSubjective(index) {
    const objElement = document.getElementById(`obj-${index}`);
    const subjElement = document.getElementById(`subj-${index}`);
    const objBtn = document.querySelector(`.example-card:nth-child(${index + 1}) .toggle-btn.objetiva`);
    const subjBtn = document.querySelector(`.example-card:nth-child(${index + 1}) .toggle-btn.subjetiva`);
    
    objElement.style.display = 'none';
    subjElement.style.display = 'flex';
    
    objBtn.classList.remove('active');
    subjBtn.classList.add('active');
    
    subjElement.classList.add('bounce');
    setTimeout(() => subjElement.classList.remove('bounce'), 1000);
}

// Exercícios
function showExercise(exerciseId) {
    // Esconder todos os exercícios
    const exercises = document.querySelectorAll('.exercise-content');
    exercises.forEach(ex => ex.classList.remove('active'));
    
    // Mostrar exercício selecionado
    const targetExercise = document.getElementById(`ex-${exerciseId}`);
    if (targetExercise) {
        targetExercise.classList.add('active');
    }
    
    // Atualizar tabs
    const tabs = document.querySelectorAll('.exercise-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const activeTab = document.querySelector(`[data-exercise="${exerciseId}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

function loadIdentificationExercise() {
    const container = document.getElementById('identificationQuestions');
    if (!container) return;
    
    container.innerHTML = '';
    
    appData.exercicios.identificacao.forEach((pergunta, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        
        questionCard.innerHTML = `
            <div class="question-text">
                "${pergunta.texto}"
            </div>
            <div class="answer-buttons">
                <button class="answer-btn" onclick="selectIdentificationAnswer(${index}, 'objetiva')">
                    🎯 Objetiva
                </button>
                <button class="answer-btn" onclick="selectIdentificationAnswer(${index}, 'subjetiva')">
                    🎨 Subjetiva
                </button>
            </div>
            <div class="feedback" id="feedback-${index}">
                <p id="feedback-text-${index}"></p>
            </div>
        `;
        
        container.appendChild(questionCard);
    });
}

function selectIdentificationAnswer(questionIndex, selectedAnswer) {
    const pergunta = appData.exercicios.identificacao[questionIndex];
    const isCorrect = selectedAnswer === pergunta.resposta;
    
    // Atualizar botões
    const questionCard = document.querySelector(`#identificationQuestions .question-card:nth-child(${questionIndex + 1})`);
    const buttons = questionCard.querySelectorAll('.answer-btn');
    
    buttons.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        if (btn.textContent.includes(selectedAnswer.charAt(0).toUpperCase() + selectedAnswer.slice(1))) {
            btn.classList.add('selected');
            if (isCorrect) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('incorrect');
            }
        }
        if (btn.textContent.includes(pergunta.resposta.charAt(0).toUpperCase() + pergunta.resposta.slice(1))) {
            btn.classList.add('correct');
        }
        btn.disabled = true;
    });
    
    // Mostrar feedback
    const feedback = document.getElementById(`feedback-${questionIndex}`);
    const feedbackText = document.getElementById(`feedback-text-${questionIndex}`);
    
    if (isCorrect) {
        feedback.className = 'feedback show correct';
        feedbackText.innerHTML = `<strong>✅ Correto!</strong> ${pergunta.explicacao}`;
    } else {
        feedback.className = 'feedback show incorrect';
        feedbackText.innerHTML = `<strong>❌ Incorreto.</strong> ${pergunta.explicacao}`;
    }
    
    // Verificar se todas as perguntas foram respondidas
    checkIdentificationComplete();
}

function checkIdentificationComplete() {
    const allAnswered = document.querySelectorAll('#identificationQuestions .answer-btn:disabled').length === appData.exercicios.identificacao.length * 2;
    
    if (allAnswered) {
        // Calcular pontuação
        const correctAnswers = document.querySelectorAll('#identificationQuestions .feedback.correct').length;
        const totalQuestions = appData.exercicios.identificacao.length;
        const score = (correctAnswers / totalQuestions) * 100;
        
        appState.exerciseScores.identificacao = score;
        
        // Mostrar resultados
        const resultsDiv = document.getElementById('identificationResults');
        const scoreDiv = document.getElementById('identificationScore');
        
        let scoreClass = 'needs-improvement';
        let message = 'Precisas de mais prática!';
        
        if (score >= 80) {
            scoreClass = 'excellent';
            message = 'Excelente trabalho!';
        } else if (score >= 60) {
            scoreClass = 'good';
            message = 'Bom trabalho!';
        }
        
        scoreDiv.className = `score-display ${scoreClass}`;
        scoreDiv.innerHTML = `
            <h3>${message}</h3>
            <p>Pontuação: ${correctAnswers}/${totalQuestions} (${Math.round(score)}%)</p>
        `;
        
        resultsDiv.style.display = 'block';
        saveProgress();
    }
}

function resetIdentificationExercise() {
    const container = document.getElementById('identificationQuestions');
    const resultsDiv = document.getElementById('identificationResults');
    
    resultsDiv.style.display = 'none';
    appState.exerciseScores.identificacao = null;
    
    loadIdentificationExercise();
    saveProgress();
}

function loadTransformationExercise() {
    const container = document.getElementById('transformationQuestions');
    if (!container) return;
    
    container.innerHTML = '';
    
    appData.exercicios.transformacao.forEach((exercicio, index) => {
        const transformationItem = document.createElement('div');
        transformationItem.className = 'transformation-item';
        
        transformationItem.innerHTML = `
            <h4>Exercício ${index + 1}</h4>
            <div class="original-text">
                <strong>Frase subjetiva:</strong><br>
                "${exercicio.subjetiva}"
            </div>
            <label for="transform-${index}">Escreve a versão objetiva:</label>
            <textarea 
                id="transform-${index}" 
                class="transformation-input" 
                placeholder="Escreve aqui a tua versão objetiva..."
                rows="3"
            ></textarea>
            <button class="btn btn--secondary" onclick="showTransformationSuggestion(${index})">
                Ver Sugestão
            </button>
            <div class="suggestion" id="suggestion-${index}" style="display: none;">
                <strong>Sugestão:</strong><br>
                "${exercicio.objetiva_sugestao}"
            </div>
        `;
        
        container.appendChild(transformationItem);
    });
}

function showTransformationSuggestion(index) {
    const suggestion = document.getElementById(`suggestion-${index}`);
    suggestion.style.display = 'block';
    suggestion.classList.add('fade-in-up');
}

function evaluateCreationExercise() {
    const petObjective = document.getElementById('pet-objective').value.trim();
    const petSubjective = document.getElementById('pet-subjective').value.trim();
    const schoolObjective = document.getElementById('school-objective').value.trim();
    const schoolSubjective = document.getElementById('school-subjective').value.trim();
    
    const feedbackContainer = document.getElementById('creationFeedback');
    feedbackContainer.innerHTML = '';
    
    if (!petObjective || !petSubjective || !schoolObjective || !schoolSubjective) {
        feedbackContainer.innerHTML = `
            <div class="feedback show incorrect">
                <strong>⚠️ Atenção!</strong> Completa todas as frases antes de avaliar.
            </div>
        `;
        return;
    }
    
    let feedback = '<div class="feedback-item"><h3>📋 Avaliação das tuas respostas:</h3>';
    
    // Análise simples baseada em palavras-chave
    const objectiveKeywords = ['tem', 'é', 'mede', 'pesa', 'anos', 'metros', 'alunos', 'professores', 'salas'];
    const subjectiveKeywords = ['melhor', 'lindo', 'maravilhoso', 'incrível', 'adorável', 'especial', 'único', 'fantástico'];
    
    // Avaliar animal objetivo
    const petObjScore = analyzeObjectivity(petObjective, objectiveKeywords);
    feedback += `<p><strong>Animal (objetivo):</strong> ${petObjScore >= 0.3 ? '✅' : '⚠️'} ${petObjScore >= 0.3 ? 'Boa tentativa!' : 'Tenta incluir mais dados factuais.'}</p>`;
    
    // Avaliar animal subjetivo
    const petSubjScore = analyzeSubjectivity(petSubjective, subjectiveKeywords);
    feedback += `<p><strong>Animal (subjetivo):</strong> ${petSubjScore >= 0.2 ? '✅' : '⚠️'} ${petSubjScore >= 0.2 ? 'Bem expressivo!' : 'Tenta incluir mais sentimentos e adjetivos.'}</p>`;
    
    // Avaliar escola objetivo
    const schoolObjScore = analyzeObjectivity(schoolObjective, objectiveKeywords);
    feedback += `<p><strong>Escola (objetivo):</strong> ${schoolObjScore >= 0.3 ? '✅' : '⚠️'} ${schoolObjScore >= 0.3 ? 'Boa tentativa!' : 'Tenta incluir mais dados factuais.'}</p>`;
    
    // Avaliar escola subjetivo
    const schoolSubjScore = analyzeSubjectivity(schoolSubjective, subjectiveKeywords);
    feedback += `<p><strong>Escola (subjetivo):</strong> ${schoolSubjScore >= 0.2 ? '✅' : '⚠️'} ${schoolSubjScore >= 0.2 ? 'Bem expressivo!' : 'Tenta incluir mais sentimentos e adjetivos.'}</p>`;
    
    feedback += '</div>';
    
    const overallScore = (petObjScore + petSubjScore + schoolObjScore + schoolSubjScore) / 4;
    appState.exerciseScores.criacao = overallScore * 100;
    
    feedbackContainer.innerHTML = feedback;
    feedbackContainer.classList.add('fade-in-up');
    
    saveProgress();
}

function analyzeObjectivity(text, keywords) {
    const words = text.toLowerCase().split(/\s+/);
    const keywordMatches = words.filter(word => keywords.some(kw => word.includes(kw))).length;
    return keywordMatches / words.length;
}

function analyzeSubjectivity(text, keywords) {
    const words = text.toLowerCase().split(/\s+/);
    const keywordMatches = words.filter(word => keywords.some(kw => word.includes(kw))).length;
    const adjectivePattern = /(ment|oso|osa|ável|ível|ante|ente)/;
    const possibleAdjectives = words.filter(word => adjectivePattern.test(word)).length;
    return (keywordMatches + possibleAdjectives) / words.length;
}

// Quiz
function startQuiz() {
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';
    
    appState.currentQuizQuestion = 0;
    appState.quizAnswers = [];
    
    showQuizQuestion();
}

function showQuizQuestion() {
    const question = appData.quiz[appState.currentQuizQuestion];
    const questionContainer = document.getElementById('quizQuestion');
    
    questionContainer.innerHTML = `
        <h3>Pergunta ${appState.currentQuizQuestion + 1} de ${appData.quiz.length}</h3>
        <p class="question-text">${question.pergunta}</p>
        <div class="quiz-options">
            ${question.opcoes.map((opcao, index) => `
                <div class="quiz-option" onclick="selectQuizAnswer(${index})">
                    ${opcao}
                </div>
            `).join('')}
        </div>
        <button class="btn btn--primary" id="nextQuizBtn" onclick="nextQuizQuestion()" disabled>
            ${appState.currentQuizQuestion === appData.quiz.length - 1 ? 'Terminar Quiz' : 'Próxima Pergunta'}
        </button>
    `;
    
    // Atualizar barra de progresso
    const progress = ((appState.currentQuizQuestion + 1) / appData.quiz.length) * 100;
    document.getElementById('quizProgressFill').style.width = progress + '%';
    document.getElementById('questionCounter').textContent = `Pergunta ${appState.currentQuizQuestion + 1} de ${appData.quiz.length}`;
}

function selectQuizAnswer(selectedIndex) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === selectedIndex) {
            option.classList.add('selected');
        }
    });
    
    appState.quizAnswers[appState.currentQuizQuestion] = selectedIndex;
    document.getElementById('nextQuizBtn').disabled = false;
}

function nextQuizQuestion() {
    if (appState.currentQuizQuestion < appData.quiz.length - 1) {
        appState.currentQuizQuestion++;
        showQuizQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    // Calcular pontuação
    let correctAnswers = 0;
    appState.quizAnswers.forEach((answer, index) => {
        if (answer === appData.quiz[index].resposta_correta) {
            correctAnswers++;
        }
    });
    
    const score = (correctAnswers / appData.quiz.length) * 100;
    appState.quizScore = score;
    
    // Mostrar resultados
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    const finalScore = document.getElementById('finalScore');
    const certificate = document.getElementById('certificate');
    
    let scoreClass = 'needs-improvement';
    let message = 'Continua a estudar!';
    let certificateHTML = '';
    
    if (score >= 80) {
        scoreClass = 'excellent';
        message = 'Excelente domínio!';
        certificateHTML = `
            <h3>🏆 Certificado de Excelência</h3>
            <p>Parabéns! Dominaste completamente o tema da linguagem objetiva vs subjetiva!</p>
        `;
    } else if (score >= 60) {
        scoreClass = 'good';
        message = 'Bom trabalho!';
        certificateHTML = `
            <h3>🎖️ Certificado de Aprovação</h3>
            <p>Demonstraste um bom conhecimento do tema. Continue a praticar!</p>
        `;
    } else {
        certificateHTML = `
            <h3>📚 Continue a Estudar</h3>
            <p>Revê a teoria e os exemplos para melhorar os teus resultados.</p>
        `;
    }
    
    finalScore.className = `final-score ${scoreClass}`;
    finalScore.innerHTML = `
        <h2>${message}</h2>
        <p>Pontuação Final: ${correctAnswers}/${appData.quiz.length} (${Math.round(score)}%)</p>
    `;
    
    certificate.innerHTML = certificateHTML;
    
    saveProgress();
    updateProgressSummary();
}

function restartQuiz() {
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizStart').style.display = 'block';
    
    appState.quizScore = null;
    appState.quizAnswers = [];
    appState.currentQuizQuestion = 0;
}

// Progresso e armazenamento
function saveProgress() {
    try {
        localStorage.setItem('linguagemApp_progress', JSON.stringify(appState));
    } catch (e) {
        console.log('Local storage não disponível');
    }
}

function loadProgress() {
    try {
        const saved = localStorage.getItem('linguagemApp_progress');
        if (saved) {
            const savedState = JSON.parse(saved);
            Object.assign(appState, savedState);
            updateProgressSummary();
        }
    } catch (e) {
        console.log('Erro ao carregar progresso');
    }
}

function updateProgressSummary() {
    const container = document.getElementById('progressSummary');
    if (!container) return;
    
    let completedSections = 0;
    let totalScore = 0;
    let scoreCount = 0;
    
    if (appState.exerciseScores.identificacao !== null) {
        completedSections++;
        totalScore += appState.exerciseScores.identificacao;
        scoreCount++;
    }
    
    if (appState.exerciseScores.criacao !== null) {
        completedSections++;
        totalScore += appState.exerciseScores.criacao;
        scoreCount++;
    }
    
    if (appState.quizScore !== null) {
        completedSections++;
        totalScore += appState.quizScore;
        scoreCount++;
    }
    
    const averageScore = scoreCount > 0 ? totalScore / scoreCount : 0;
    
    container.innerHTML = `
        <h3>O teu desempenho:</h3>
        <p>Secções completadas: ${completedSections}/3</p>
        ${scoreCount > 0 ? `<p>Pontuação média: ${Math.round(averageScore)}%</p>` : ''}
        <div style="margin-top: 16px;">
            <p><strong>Exercício de Identificação:</strong> ${appState.exerciseScores.identificacao !== null ? Math.round(appState.exerciseScores.identificacao) + '%' : 'Por completar'}</p>
            <p><strong>Exercício de Criação:</strong> ${appState.exerciseScores.criacao !== null ? 'Completado' : 'Por completar'}</p>
            <p><strong>Quiz Final:</strong> ${appState.quizScore !== null ? Math.round(appState.quizScore) + '%' : 'Por completar'}</p>
        </div>
    `;
}

// Funções utilitárias globais para serem chamadas do HTML
window.goToSection = goToSection;
window.startLearning = startLearning;
window.showObjective = showObjective;
window.showSubjective = showSubjective;
window.showExercise = showExercise;
window.selectIdentificationAnswer = selectIdentificationAnswer;
window.resetIdentificationExercise = resetIdentificationExercise;
window.showTransformationSuggestion = showTransformationSuggestion;
window.evaluateCreationExercise = evaluateCreationExercise;
window.startQuiz = startQuiz;
window.selectQuizAnswer = selectQuizAnswer;
window.nextQuizQuestion = nextQuizQuestion;
window.restartQuiz = restartQuiz;