const form = document.getElementById('quizForm');
const resultContainer = document.getElementById('result-container');
const msgValidation = document.getElementById('messagem-validacao');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const q1 = formData.get('q1');
    const q2 = formData.getAll('q2');
    const q3 = formData.get('q3');

    // Validação
    if (!q1 || q2.length === 0 || !q3) {
        msgValidation.innerHTML = '<div class="alert alert-danger">Por favor, responda todas as perguntas!</div>';
        resultContainer.classList.add('d-none'); // Esconde resultado se tiver erro
        return;
    }
    msgValidation.innerHTML = '';

    // Cálculo
    let score = 0;
    let feedback = '<ul class="list-group list-group-flush text-start mt-2">';

    // Q1
    if (q1 === 'rdr2') {
        score++;
        feedback += '<li class="list-group-item text-success fw-bold">1. Red Dead Redemption 2 (Correto!)</li>';
    } else {
        feedback += '<li class="list-group-item text-danger">1. Errou (O Red Dead Redemption 2 que é da Rockstar Games)</li>';
    }

    // Q2
    const acertouQ2 = q2.includes('arthur') && q2.includes('john') && q2.length === 2;
    if (acertouQ2) {
        score++;
        feedback += '<li class="list-group-item text-success fw-bold">2. Personagens do Faroeste (Correto!)</li>';
    } else {
        feedback += '<li class="list-group-item text-danger">2. Personagens do Faroeste (Errou ou faltou uma opção)</li>';
    }

    // Q3
    if (q3 === 'ps2') {
        score++;
        feedback += '<li class="list-group-item text-success fw-bold">3. Playstation 2 (Correto!)</li>';
    } else {
        feedback += '<li class="list-group-item text-danger">3. Errou (Foi o Playstation)</li>';
    }
    
    feedback += '</ul>';

    // Exibição Simples
    let scoreClass = score === 3 ? 'text-success' : (score === 0 ? 'text-danger' : 'text-primary');
    
    resultContainer.innerHTML = `
        <h3 class="${scoreClass}">Você acertou ${score} de 3!</h3>
        ${feedback}
    `;
    
    // Mostra a div de resultado
    resultContainer.classList.remove('d-none');
    
    // Rola suavemente até o resultado
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});