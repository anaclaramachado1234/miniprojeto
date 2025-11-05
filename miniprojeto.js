let notaAtual = ''
let corIndex = 0 // controle para alternar cores

// Lista de cores usadas ciclicamente
const cores = ['blue', 'green', 'purple']

function adicionar() {
    const inputNota = document.getElementById('nota')
    notaAtual = inputNota.value.trim()
    
    if (notaAtual === '') {
        alert('Por favor, insira uma anotação válida.')
        return
    }

    const divInteracao = document.getElementById('pergunta')
    divInteracao.innerHTML = ''

    const perg = document.createElement('p')
    perg.innerText = "Quer marcar essa nota como urgente?"
    divInteracao.appendChild(perg)
    // BOTÕES SIM E NÃO
    const btnSim = document.createElement('button')
    btnSim.innerText = "Sim"
    btnSim.addEventListener('click', function() {
        salvarNota('c1')
    })
    divInteracao.appendChild(btnSim)

    const btnNao = document.createElement('button')
    btnNao.innerText = "Não"
    btnNao.addEventListener('click', function() {
        salvarNota('c2')
    })
    divInteracao.appendChild(btnNao)

    inputNota.value = ''
    inputNota.focus()
}

function salvarNota(containerId) {
    const container = document.getElementById(containerId)
    
    // Cria um item de lista (<li>)
    const li = document.createElement('li')
    li.style.color = cores[corIndex] // aplica a cor da sequência
    li.innerText = notaAtual + ' '

    // Atualiza a cor para a próxima nota (cíclico)
    corIndex = (corIndex + 1) % cores.length

    // Botão de remover
    const btnRemover = document.createElement('button')
    btnRemover.innerText = 'Remover'
    btnRemover.style.marginLeft = '10px'
    btnRemover.addEventListener('click', function() {
        container.removeChild(li)
    })
    li.appendChild(btnRemover)

    container.appendChild(li)

    // Limpa pergunta e reseta nota
    document.getElementById('pergunta').innerHTML = ''
    notaAtual = ''
}

// Função para apagar todas as notas
function apagarTudo() {
    document.getElementById('c1').innerHTML = ''
    document.getElementById('c2').innerHTML = ''
    document.getElementById('pergunta').innerHTML = ''
    notaAtual = ''
    corIndex = 0
}
