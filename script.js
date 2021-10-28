let banco = '0'
let operadores = '+-*/'
const botao = document.querySelectorAll('.numeroOperador')
const botaoIgual = document.querySelector('.equal')
const botaoLimpar = document.querySelector('.clear')
const botaoDel = document.querySelector('.delete')
const botaoPercent = document.querySelector('.percent')
const displayOperation = document.querySelector('.operation')
const displayResult = document.querySelector('.result')

function atualizarOperation(banco) {
    displayOperation.innerHTML = banco
}

botao.forEach(item => {
    item.addEventListener('click', (e) => {
        if (banco.length <= 20) {
            if (e.target.value == '.') {
                if (banco.indexOf('.') == -1) {
                    banco += e.target.value
                    atualizarOperation(banco)
                }

            } else if (operadores.includes(e.target.value) && operadores.includes(banco.slice(-1))) {
                banco = banco.slice(0, banco.length - 1)
                banco += e.target.value
                atualizarOperation(banco)

            } else {
                banco += e.target.value
                atualizarOperation(banco)
                console.log(e.target.value)
            }
        }
    })
})

botaoIgual.addEventListener('click', () => {
    const resultado = eval(banco)
    banco = String(resultado)
    displayResult.innerHTML = banco
})

botaoDel.addEventListener('click', () => {
    banco = banco.slice(0, banco.length - 1)
    atualizarOperation(banco)
})

botaoLimpar.addEventListener('click', () => {
    banco = ''
    displayOperation.innerHTML = '0'
    displayResult.innerHTML = '0'
})

botaoPercent.addEventListener('click', () => {
    const resultado = eval(banco)
    banco = String(resultado.toFixed(2))
    displayResult.innerHTML = banco
})
