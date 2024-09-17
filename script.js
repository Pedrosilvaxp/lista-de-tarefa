const main = document.querySelector('main');

const tarefasContainer = document.createElement('div');
tarefasContainer.classList.add('tarefasContainer');
main.appendChild(tarefasContainer);

const mensagem = document.querySelector('p');
let contagem = 0;
let contagemConcluidas = 0;

function adicionar() {
    const nome = document.querySelector('#nome').value;
    
    // Nova tarefa
    const novaTarefa = document.createElement('div');
    novaTarefa.classList.add('novaTarefa');

    // Adicionando nome de tarefa
    const nomeDaTarefa = document.createElement('div');
    nomeDaTarefa.classList.add('item');
    nomeDaTarefa.textContent = nome;

    // Criando botoes
    const buttonsCont = document.createElement('div');
    buttonsCont.classList.add('btns');
    
    const buttonX = document.createElement('input');
    buttonX.type = 'button';
    buttonX.value = '✖️';
    buttonX.style.border = '0px';

    const buttonV = document.createElement('input');
    buttonV.type = 'checkbox';
    buttonV.classList.add('checkbox');

    const span = document.createElement('span');
    span.classList.add('checkbox-label');

    const label = document.createElement('label');
    label.append(buttonV, span);


    // Eventos - Marcar como concluída
    buttonV.addEventListener('click', function() {
        if (buttonV.checked == true) {
            novaTarefa.style.opacity = '0.28';
            novaTarefa.style.border = '1px solid green';
            contagemConcluidas += 1;
            if (contagem > 1) {
                mensagem.innerHTML = `Você tem ${contagem} tarefas e ${contagemConcluidas} concluídas`;
            } else {
                mensagem.innerHTML = `Você tem ${contagem} tarefa e ${contagemConcluidas} concluídas`;
            }
        } else {
            novaTarefa.style.opacity = 'inherit';
            novaTarefa.style.border = '1px solid #785DC8';
            contagemConcluidas -= 1;
            if (contagem > 1) {
                mensagem.innerHTML = `Você tem ${contagem} tarefas e ${contagemConcluidas} concluídas`;
            } else {
                mensagem.innerHTML = `Você tem ${contagem} tarefa e ${contagemConcluidas} concluídas`;
            }
        }
    });
    // Evento de apagar tarefa específica
    buttonX.addEventListener('click', function() {
        tarefasContainer.removeChild(novaTarefa);
        contagemConcluidas >= 1 ? contagemConcluidas-=1 : 0;
        contagem -= 1;
        if (contagem > 1) {
            mensagem.innerHTML = `Você tem ${contagem} tarefas e ${contagemConcluidas} concluídas`;
        } else {
            mensagem.innerHTML = `Você tem ${contagem} tarefa e ${contagemConcluidas} concluídas`;
        }
    });

    // Atribuindo elementos
    buttonsCont.appendChild(buttonX);
    novaTarefa.append(label, nomeDaTarefa, buttonsCont);
    tarefasContainer.appendChild(novaTarefa);
    
    // Contagem
    contagem = tarefasContainer.children.length;
    if (contagem > 1) {
        mensagem.innerHTML = `Você tem ${contagem} tarefas e ${contagemConcluidas} concluídas`;
    } else {
        mensagem.innerHTML = `Você tem ${contagem} tarefa e ${contagemConcluidas} concluídas`;
    }
}

function limpar() {
    tarefasContainer.innerHTML = '';
    contagem = 0;
    contagemConcluidas = 0;
    mensagem.innerHTML = 'Adicione abaixo';
}