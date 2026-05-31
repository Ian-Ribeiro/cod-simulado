// Banco de questões (inicial)
const questions = [
  {
    "question": "1. (Língua Portuguesa) Assinale a alternativa em que o uso do acento indicativo de crase é OBRIGATÓRIO:",
    "options": [
      "A) O candidato preferiu estudar a caminhar no parque.",
      "B) O diretor do hospital municipal fez referência à funcionária da recepção.",
      "C) Todos os relatórios do setor foram entregues a ela no prazo correto.",
      "D) O prefeito eleito começou a discursar para a população de São Pedro.",
      "E) O auditor de segurança tencionava viajar a uma cidade pacata."
    ],
    "answer": 1
  },
  {
    "question": "2. (Língua Portuguesa) No que se refere às regras de concordância verbal, assinale a opção inteiramente CORRETA:",
    "options": [
      "A) A maioria dos servidores públicos municipais aprovaram o novo estatuto.",
      "B) Faziam três anos que o concurso da prefeitura não era realizado.",
      "C) Haviam muitos candidatos aguardando a abertura dos portões da escola.",
      "D) Choveram reclamações na ouvidoria da prefeitura durante a última semana.",
      "E) Fui eu que organizou todo o cronograma de estudos para a prova."
    ],
    "answer": 0
  },
  {
    "question": "3. (Língua Portuguesa) O nexo sublinhado na frase \"Embora o orçamento municipal esteja restrito, os investimentos em educação básica foram mantidos\" pode ser substituído, sem alteração do sentido original, por:",
    "options": [
      "A) Contudo",
      "B) Conquanto",
      "C) Portanto",
      "D) Porquanto",
      "E) Entrementes"
    ],
    "answer": 1
  },
  {
    "question": "4. (Língua Portuguesa) Assinale a frase que apresenta um erro crasso quanto ao uso ou omissão do sinal de crase:",
    "options": [
      "A) O guarda municipal solicitou a carteira de habilitação à condutora.",
      "B) As informações sobre o edital do concurso foram fornecidas a prazo.",
      "C) O palestrante começou à falar sobre os limites territoriais do município.",
      "D) Os fiscais de tributos assistiram a duas audiências públicas importantes.",
      "E) Ele sempre se dedica às causas sociais e educacionais da região."
    ],
    "answer": 2
  },
  {
    "question": "5. (Língua Portuguesa) Em \"A população de São Pedro do Piauí clamava por melhorias, mas os recursos eram escassos\", a conjunção coordenada estabelece uma relação de:",
    "options": [
      "A) Conclusão",
      "B) Explicação",
      "C) Alternância",
      "D) Adversidade",
      "E) Adição"
    ],
    "answer": 3
  },
  {
    "question": "6. (Raciocínio Lógico) Considere a proposição condicional: \"Se Lucca estuda Python, então ele desenvolve uma aplicação inteligente\". A negação lógica correta dessa proposição é:",
    "options": [
      "A) Se Lucca não estuda Python, então ele não desenvolve uma aplicação inteligente.",
      "B) Lucca não estuda Python ou ele não desenvolve uma aplicação inteligente.",
      "C) Lucca estuda Python e ele não desenvolve uma aplicação inteligente.",
      "D) Se Lucca desenvolve uma aplicação inteligente, então ele estuda Python.",
      "E) Lucca não estuda Python e ele desenvolve uma aplicação inteligente."
    ],
    "answer": 2
  },
  {
    "question": "7. (Raciocínio Lógico) Dadas as proposições P e Q, sabe-se que o conectivo de conjunção (P ∧ Q) resulta em um valor lógico VERDADEIRO. A partir dessa informação, é correto afirmar que:",
    "options": [
      "A) P é falsa e Q é verdadeira.",
      "B) P é verdadeira e Q é falsa.",
      "C) Ambas as proposições P e Q são falsas.",
      "D) Ambas as proposições P e Q são verdadeiras.",
      "E) O valor de P e Q é indiferente para o resultado."
    ],
    "answer": 3
  },
  {
    "question": "8. (Raciocínio Lógico) Um reservatório de água possui o formato de um bloco retangular com as seguintes dimensões internas: 2 metros de comprimento, 1,5 metros de largura e 2 metros de altura. A capacidade total desse reservatório, em litros, é igual a:",
    "options": [
      "A) 6.000 litros",
      "B) 3.500 litros",
      "C) 600 litros",
      "D) 35.000 litros",
      "E) 60.000 litros"
    ],
    "answer": 0
  },
  {
    "question": "9. (Raciocínio Lógico) Um técnico de segurança parte do ponto central da prefeitura e caminha 8 km em linha reta em direção ao Norte. Em seguida, ele gira 90 graus à direita e caminha mais 6 km em direção ao Leste. A distância em linha reta entre o ponto de partida e o ponto final é de:",
    "options": [
      "A) 14 km",
      "B) 10 km",
      "C) 12 km",
      "D) 7 km",
      "E) 5 km"
    ],
    "answer": 1
  },
  {
    "question": "10. (Raciocínio Lógico) Qual das seguintes alternativas apresenta uma contradição lógica (proposição que é sempre falsa, independentemente dos valores lógicos das proposições simples)?",
    "options": [
      "A) P v ~P",
      "B) P ➔ P",
      "C) P ∧ ~P",
      "D) P ➔ ~P",
      "E) ~P v P"
    ],
    "answer": 2
  },
  {
    "question": "11. (Noções de Informática) Um funcionário da Prefeitura de São Pedro do Piauí recebeu um e-mail falso que simulava uma mensagem urgente do Tribunal de Contas, solicitando a atualização imediata de credenciais de login através de um link. Essa ameaça virtual é classificada como:",
    "options": [
      "A) Ransomware",
      "B) Phishing",
      "C) Spyware",
      "D) Worm",
      "E) Trojan Horse"
    ],
    "answer": 1
  },
  {
    "question": "12. (Noções de Informática) No Microsoft Excel, a célula A1 possui o valor 10 e a célula A2 possui o valor 4. Caso o usuário insira a fórmula =SE(MÉDIA(A1:A2)>8; \"Acima\"; \"Abaixo\") na célula A3, o resultado exibido será:",
    "options": [
      "A) Acima",
      "B) Abaixo",
      "C) 14",
      "D) 7",
      "E) #ERRO!"
    ],
    "answer": 1
  },
  {
    "question": "13. (Noções de Informática) Ao criar planilhas eletrônicas complexas, o uso do caractere cifrão ($) antes da letra da coluna e do número da linha (ex: $B$4) serve especificamente para:",
    "options": [
      "A) Converter o valor da célula em formato de moeda corrente (Real).",
      "B) Fixar a referência da célula, impedindo que ela se altere ao ser copiada ou arrastada.",
      "C) Indicar que a célula contém uma fórmula matemática secreta.",
      "D) Formatar a borda da célula com destaque financeiro.",
      "E) Habilitar a verificação de erros ortográficos na célula."
    ],
    "answer": 1
  },
  {
    "question": "14. (Noções de Informática) No sistema operacional Windows 10, o mecanismo de segurança nativo responsável por monitorar o tráfego de rede e bloquear acessos não autorizados é denominado:",
    "options": [
      "A) Windows Defender Antivírus",
      "B) Firewall do Windows",
      "C) BitLocker",
      "D) Painel de Controle",
      "E) Prompt de Comando"
    ],
    "answer": 1
  },
  {
    "question": "15. (Noções de Informática) Um ataque cibernético que sequestra o sistema de arquivos de um computador por meio de criptografia forte e exige o pagamento de um resgate financeiro é conhecido como:",
    "options": [
      "A) Adware",
      "B) Rootkit",
      "C) Ransomware",
      "D) Backdoor",
      "E) Keylogger"
    ],
    "answer": 2
  },
  {
    "question": "16. (Conhecimentos Locais) No que concerne aos aspectos geográficos e de organização política do município de São Pedro do Piauí, assinale a alternativa CORRETA:",
    "options": [
      "A) O município faz parte da microrregião do Médio Parnaíba Piauiense.",
      "B) São Pedro do Piauí é a atual capital administrativa do estado do Piauí.",
      "C) O município faz fronteira direta com o estado do Ceará ao leste.",
      "D) A economia da localidade é baseada estritamente na extração de minério de ferro.",
      "E) O bioma predominante na totalidade do território municipal é a Mata Atlântica."
    ],
    "answer": 0
  },
  {
    "question": "17. (Conhecimentos Locais) Sobre a história e os símbolos oficiais de São Pedro do Piauí, é correto afirmar que:",
    "options": [
      "A) O município não possui uma bandeira oficial instituída por lei.",
      "B) A emancipação política e a história do município possuem forte ligação com a missão jesuítica e a atividade criatória de gado na região.",
      "C) A cidade foi fundada no início do século XXI por colonizadores europeus.",
      "D) O padroeiro oficial que dá nome à cidade é Santo Antônio.",
      "E) A arquitetura histórica do centro municipal foi tombada pela UNESCO como patrimônio da humanidade."
    ],
    "answer": 1
  },
  {
    "question": "18. (Língua Portuguesa) Identifique a frase onde a regência verbal está em DESACORDO com os padrões da norma culta da língua:",
    "options": [
      "A) Os novos concursados assistiram ao treinamento técnico na prefeitura.",
      "B) O cargo público almejado por Lucca exige dedicação integral.",
      "C) O motorista do transporte escolar preferia trabalhar de dia do que de noite.",
      "D) Os fiscais da vigilância sanitária visavam ao bem-estar de toda a população.",
      "E) Esqueci-me dos documentos necessários para efetuar a matrícula."
    ],
    "answer": 2
  },
  {
    "question": "19. (Raciocínio Lógico) Considere a seguinte frase: \"Nenhum auditor de segurança é descuidado\". Do ponto de vista dos diagramas lógicos, essa afirmação equivale a dizer que:",
    "options": [
      "A) O conjunto dos auditores de segurança e o conjunto dos descuidados possuem interseção total.",
      "B) Pelo menos um auditor de segurança pertence ao conjunto dos descuidados.",
      "C) O conjunto dos auditores de segurança e o conjunto dos descuidados são disjuntos (não possuem elementos em comum).",
      "D) Todos os descuidados pertencem obrigatoriamente ao conjunto de auditores.",
      "E) O conjunto dos auditores de segurança contém o conjunto dos descuidados."
    ],
    "answer": 2
  },
  {
    "question": "20. (Noções de Informática) Utilizando o navegador Google Chrome em sua configuração padrão, qual atalho de teclado permite abrir uma nova janela em modo de navegação anônima?",
    "options": [
      "A) Ctrl + T",
      "B) Ctrl + N",
      "C) Ctrl + Shift + N",
      "D) Ctrl + Shift + P",
      "E) Alt + F4"
    ],
    "answer": 2
  }
]
