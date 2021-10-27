let banco = ''
const botao = document.querySelectorAll( '.numeroOperador')
const botaoIgual = document.querySelector('.equal')
const botaoLimpar = document.querySelector('.clear')
const botaoDel = document.querySelector('.delete')
const botaoPercent = document.querySelector('.percent')
const displayOperation = document.querySelector('.operation')
const displayResult = document.querySelector('.result')

function atualizarOperation(banco){
    displayOperation.innerHTML = banco
}

botao.forEach(item => {
    item.addEventListener('click', (e)=>{
            banco += e.target.value
            console.log(banco)
            atualizarOperation(banco)
                  
    })
})

botaoIgual.addEventListener('click', (e)=>{
    const resultado = eval(banco)
    console.log(resultado)
    banco = resultado
    displayResult.innerHTML = banco
   

})

botaoDel.addEventListener('click', ()=>{
    banco = banco.slice(0, banco.length - 1)
    console.log(banco)
    atualizarOperation(banco)
    
})

botaoLimpar.addEventListener('click', ()=>{
    banco = ''
    displayResult.innerHTML = ''
    console.log(banco)
    atualizarOperation(banco)
})

botaoPercent.addEventListener('click', ()=>{
    const resultado = eval(banco)
    console.log(resultado)
    banco = resultado
})

//validar: operator depois de operator;  dot depois de dot (dot em float)
