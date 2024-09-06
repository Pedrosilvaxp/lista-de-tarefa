const main = document.querySelector('main');
const tarefasContainer = document.createElement('div');
tarefasContainer.classList.add('tarefasContainer');
main.appendChild(tarefasContainer);

function adicionar() {
    const nome = document.querySelector('#nome').value;
    
    // Nova tarefa
    const novaTarefa = document.createElement('div');
    novaTarefa.classList.add('style');

    // Adicionando nome de tarefa
    const nomeDaTarefa = document.createElement('div');
    nomeDaTarefa.classList.add('item');
    nomeDaTarefa.textContent = nome;

    // Criando botoes
    const buttonsCont = document.createElement('div');
    buttonsCont.classList.add('btns');
    
    const buttonX = document.createElement('input');
    buttonX.type = 'button';
    buttonX.value = 'X';
    // Evento de apagar tarefa específica
    buttonX.addEventListener('click', function() {
        tarefasContainer.removeChild(novaTarefa);
    });
    // Marcar como concluída
    const buttonV = document.createElement('input');
    buttonV.type = 'button';
    buttonV.value = 'V';
    buttonV.addEventListener('click', function() {
        novaTarefa.style.opacity = '0.20';
    });

    // Atribuindo elementos
    buttonsCont.append(buttonV, buttonX);
    novaTarefa.append(nomeDaTarefa, buttonsCont);
    tarefasContainer.appendChild(novaTarefa);
}

function limpar() {
    tarefasContainer.innerHTML = '';
}