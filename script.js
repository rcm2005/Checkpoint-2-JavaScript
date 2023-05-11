document.body.setAttribute('data-theme','t-light')

const button = document.querySelector('.js-tema')

const themes = {
    't-normal': 't-light',
    't-light': 't-dark',
    't-dark': 't-normal'
     
}

if (button) {
    button.addEventListener('click', event => {
        event.preventDefault()
        const currentTheme = document.body.dataset.theme
        document.body.setAttribute('data-theme', themes[currentTheme] ,'t-dark')
    })
}

function validar(){
    let nome = document.getElementById("n").value
    let email = document.getElementById("e").value
    let mensagem = document.getElementById("m").value

    if(nome == ""|| email == "" || mensagem == ""){
        alert('preencha todos os campos')
    }else{
        alert('Mensagem registrada ! Responderemos assim que possível')
    }
}
