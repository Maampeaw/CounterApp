const number = document.getElementById('count');
const increament = document.querySelector('.increase');
const clear = document.querySelector('.clear')

const input = document.querySelector('.input')
const saved = document.querySelector('.save')
const displaySaved = document.querySelector('.saved')
const clearSaved = document.querySelector('.clearSaved')
const welcome = document.querySelector('h1')

integernum = parseInt(number.innerText)
increament.addEventListener('click', function(){
    let inputValue = parseInt(input.value)
    if (inputValue === 0) {
    
    integernum+= 1;
    number.innerText = integernum
    }else{
        integernum += inputValue
        number.innerText = integernum
        input.value = 0

    }
})

clear.addEventListener('click', function(){
    integernum = 0
    number.innerText = 0
    input.value = 0
})
saved.addEventListener('click', function(){
    let span = document.createElement('span')
    displaySaved.appendChild(span)
    span.innerText = number.innerText + ' - '
})

clearSaved.addEventListener('click', function(){
    displaySaved.innerHTML='Previous entries: '
    alert('memmory cleared')
})

welcome.innerText='Welcome to my counter app '