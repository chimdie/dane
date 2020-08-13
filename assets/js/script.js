const btn = document.querySelector('button');
const collapse = document.querySelector('h4');
const div = document.querySelector('.txt1');
div.style.backgroundColor = 'yellow'

btn.addEventListener('click', ()=>{
    collapse.style.paddingTop = '8rem'
})
btn.addEventListener('toggle', ()=>{
    collapse.preventDefault()
})