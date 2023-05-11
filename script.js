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


function quiz(){

    let msg = document.getElementById('msg')
    
        let score = 0;
    
        let q1 = prompt('Quantas uvas são necessárias para fazer uma garrafa de vinho ? \n [1] 100 \n [2] 200 \n [3] 300 \n [4] 400')
        if (q1 == 3) {
        score++;
        }
    
        let q2 = prompt('Qual é o país que mais consome vinho no mundo  ? \n [1] China \n [2] Japão \n [3] Italia \n [4] EUA')
        if (q2 == 1) {
        score++;
        }
    
        let q3 = prompt('Qual é o país que mais produz vinho no mundo ? \n [1] Brasil \n [2] Portugal \n [3] Italia \n [4] Paquistão')
        if (q3 == 3) {
        score++;
        }
    
        let q4 = prompt("Qual é a marca de vinho mais antiga do mundo ? \n [1] Casillero del Diablo \n [2] Yellow Tail \n [3] Jacob's Creek  \n [4] Quinta do Vesúvio")
        if (q4 == 4) {
        score++;
        }
    
        let q5 = prompt("Quando foi feito o vinho mais antigo do mundo ? \n [1] 325 a.C. \n [2] 800 a.C. \n [3] 1800  \n [4] 1200")
        if (q5 == 1) {
        score++;
        }
    
        let q6 = prompt('Quando foi encontrada a garrafa de vinho mais antiga do mundo ? \n [1] 2011 \n [2] 1557 \n [3] 2021  \n [4] 1867')
        if (q6 == 4) {
        score++;
        }
    
        let q7 = prompt('Qual é o nome da planta que é capaz de gerar uvas ? \n [1] Uvero \n [2] Parreira \n [3] Uvozero \n [4] Pé de uva')
        if (q7 == 2) {
        score++;
        }
    
        let q8 = prompt('A camada de sólidos formada no tanque de vinificação é chamada: \n [1] Nata \n [2] Chapéu \n [3] Mosto \n [4] Remontado ')
        if (q8 == 2) {
        score++;
        }
    
        let q9 = prompt('Indique a uva tinta ícone da D.O.C. Bairrada em Portugal \n [1] Baga \n [2] Periquita \n [3] Tinta Roriz \n [4] Touriga Nacional ' )
        if (q9 == 1) {
        score++;
        }
    
        let q10 = prompt('Beaujolais Nouveau é um vinho produzido por maceração carbônica com a uva: \n [1] Pint Noir \n [2] Syrah \n [3] Gammay \n [4] Carbenet Franc ')
        if (q10 == 3) {
        score++;
        }
    
        let pula = '<br>'
        msg.innerHTML = `<p>Você acertou ${score} perguntas de  <br> 10.\n \n <br>1 - 300 \n<br> 2 - china\n<br> 3 - italia \n<br> 4 - Quinta do Vesúvio \n<br> 5 -  325 a.C. \n<br> 6 - 1867 \n<br> 7 - Parreira \n<br> 8 - Chapéu \n" 9 - Baga \n<br> 10 - Gammay </p>`
        // alert(`Você acertou ${score} perguntas de 10.`)
        
    }