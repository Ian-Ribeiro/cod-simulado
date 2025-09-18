const output = document.getElementById("formattedQuestion");
output.textContent = JSON.stringify(questions, null, 2);

// Alternar entre os modos
function showForm() {
  document.getElementById("questionForm").classList.remove("hidden");
  document.getElementById("jsonForm").classList.add("hidden");
}

function showJSON() {
  document.getElementById("jsonForm").classList.remove("hidden");
  document.getElementById("questionForm").classList.add("hidden");
}

// Adicionar via formulário
document.getElementById("questionForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const questionText = document.getElementById("question").value.trim();
  const options = Array.from(document.querySelectorAll(".option")).map(o => o.value.trim());
  const answer = parseInt(document.getElementById("answer").value);

  const newQuestion = { question: questionText, options: options, answer: answer };
  questions.push(newQuestion);

  output.textContent = JSON.stringify(questions, null, 2);
  e.target.reset();
});

// Adicionar via JSON direto
function addFromJSON() {
  try {
    const raw = document.getElementById("jsonInput").value.trim();
    if (!raw) return;

    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      parsed.forEach(q => questions.push(q));
    } else {
      questions.push(parsed);
    }

    output.textContent = JSON.stringify(questions, null, 2);
    document.getElementById("jsonInput").value = "";
    alert("Questão adicionada com sucesso!");
  } catch (err) {
    alert("Erro no JSON: " + err.message);
  }
}
