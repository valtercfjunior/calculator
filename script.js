let banco = []
const botao = document.querySelectorAll( '.numeroOperador')
const botaoIgual = document.querySelector('.equal')
const botaoLimpar = document.querySelector('.clear')
const botaldel = document.querySelector('delete')

botao.forEach(item => {
    item.addEventListener('click', (e)=>{
            banco.push(e.target.value)
            console.log(banco)         
    })
})

botaoIgual.addEventListener('click', (e)=>{
    const resultado = eval(banco.toString().replaceAll(',', ''))
    console.log(resultado)

})



