// Renderiza as questões
const quizContainer = document.getElementById("quiz");

questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.classList.add("question");

  const questionText = document.createElement("p");
  questionText.textContent = q.question;
  div.appendChild(questionText);

  q.options.forEach((option, i) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.class = "option-radio";
    input.type = "radio";
    input.name = "question" + index;
    input.value = i;
    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + option));
    div.appendChild(label);
    div.appendChild(document.createElement("br"));
  });

  quizContainer.appendChild(div);
});

// Corrige e mostra resultado
function submitQuiz() {
  let score = 0;
  let wrongAnswers = [];

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected) {
      const chosen = parseInt(selected.value);
      if (chosen === q.answer) {
        score++;
      } else {
        wrongAnswers.push({ question: q.question, chosen: q.options[chosen], correct: q.options[q.answer] });
      }
    } else {
      wrongAnswers.push({ question: q.question, chosen: "Não respondeu", correct: q.options[q.answer] });
    }
  });

  const result = document.getElementById("result");
  let html = `<h2>Você acertou ${score} de ${questions.length} questões.</h2>`;

  if (wrongAnswers.length > 0) {
    html += "<h3>Questões incorretas:</h3><ul>";
    wrongAnswers.forEach(w => {
      html += `
        <li>
          <strong>${w.question}</strong><br>
          Sua resposta: <span style="color:red">${w.chosen}</span><br>
          Resposta correta: <span style="color:green">${w.correct}</span>
        </li>
      `;
    });
    html += "</ul>";
  } else {
    html += "<p>Parabéns! Você acertou todas 🎉</p>";
  }

  result.innerHTML = html;
}
