


function quiz (){

    let q1 = prompt('Quantas uvas são necessárias para fazer uma garrafa de vinho ? \n [1] 100 \n [2] 200 \n [3] 300 \n [4] 400')
    let q2 = prompt('Qual é o país que mais consome vinho no mundo  ? \n [1] China \n [2] Japão \n [3] italia \n [4] EUA')
    let q3 = prompt('Qual é o país que mais produz vinho no mundo ? \n [1] Brasil \n [2] Portugal [3] italia \n [4] Paquistão')
    let q4 = prompt("Qual é a marca de vinho mais antiga do mundo ? \n [1] Casillero del Diablo \n [2] Yellow Tail \n [3] Jacob's Creek  \n [4] Quinta do Vesúvio")
    let q5 = prompt("Quando foi feito o vinho mais antigo do mundo ? \n [1] 325 d.C. \n [2] 800 a.C. \n [3] 1800  \n [4] 1200")
    let q6 = prompt('Quando foi encontrada a garrafa de vinho mais antiga do mundo ? \n [1] 2011 \n [2] 1557 \n [3] 2021  \n [4] 1867')
    let q7 = prompt('Qual é o nome da planta que é capaz de gerar uvas ? \n [1] Uvero \n [2] Parreira \n [3] Uvozero \n [4] Pé de uva')
    let q8 = prompt('A camada de sólidos formada no tanque de vinificação é chamada: \n [1] Nata \n [2] Chapéu \n [3] Mosto \n [4] Remontado ')
    let q9 = prompt('Indique a uva tinta ícone da D.O.C. Bairrada em Portugal \n [1] Baga \n [2] Periquita \n [3] Tinta Roriz \n [4] Touriga Nacional ' )
    let q10 = prompt('Beaujolais Nouveau é um vinho produzido por maceração carbônica com a uva: \n [1] Pint Noir \n [2] Syrah \n [3] Gammay \n [4] Carbenet Franc ')


    let contador = 0



    let msg = document.getElementById('msg')
    msg.innerHTML= `<h2> Processando o resultado... <h2>`


    switch(q1){
        case 1:
            // template de strings é feito com `` e utiliza o {} para interpolar as strings 
            msg.innerHTML += `<p>incorreto</p>`
            break  // break é obrigatório em cada case, para não executar comandos de outros cases
        case 2:
            msg.innerHTML += `<p>incorreto</p>`
            break
        case 3:
            msg.innerHTML += `<p>correto</p>`
            contador++;
            console.log("Questão correta. Contador: " + contador)
            break
        case 4:
            msg.innerHTML += `<p>incorreto</p>`
            break
        default:  
        msg.innerHTML += `<p>OPÇÃO INVÁLIDA !  </p> ` // caso o usuário não digite nenhuma das opçoes válidas, o programa seguirá pelo case default
        break
        
    }

    switch(q2){
        case 1:
            
            msg.innerHTML += `<p>incorreto</p>`
            break  
        case 2:
            msg.innerHTML += `<p>correto</p>`
            contador++;
            console.log("Questão correta. Contador: " + contador)
            break
        case 3:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 4:
            msg.innerHTML += `<p>incorreto</p>`
            break
         
        
    }

    switch(q3){
        case 1:
            
            msg.innerHTML += `<p>incorreto</p>`
            break  
        case 2:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 3:
            msg.innerHTML = `<p>correto</p>`
            contador++;
            break
        case 4:
            msg.innerHTML += `<p>incorreto</p>`
            break
         
        
    }

    switch(q4){
        case 1:
            
            msg.innerHTML += `<p>incorreto</p>`
            break  
        case 2:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 3:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 4:
            msg.innerHTML = `<p>correto</p>`
            contador++;
            break
         
        
    }

    switch(q5){
        case 1:
            
            msg.innerHTML = `<p>correto</p>`
            contador++;
            break  
        case 2:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 3:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 4:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
         
        
    }

    switch(q6){
        case 1:
            
            msg.innerHTML += `<p>incorreto</p>`
            break  
        case 2:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 3:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 4:
            msg.innerHTML = `<p>correto</p>`
            contador++;
            break
         
        
    }
    switch(q7){
        case 1:
            
            msg.innerHTML += `<p>incorreto</p>`
            break  
        case 2:
            msg.innerHTML = `<p>correto</p>`
            contador++;
            break
        case 3:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 4:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
         
        
    }

    switch(q8){
        case 1:
            
            msg.innerHTML += `<p>incorreto</p>`
            break  
        case 2:
            msg.innerHTML += `<p>correto</p>`
            contador++;
            break
        case 3:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 4:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
         

    }

    switch(q9){
        case 1:
            
            msg.innerHTML += `<p>correto</p>`
            contador++;
            break  
        case 2:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 3:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 4:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
         

    }

    switch(q10){
        case 1:
            
            msg.innerHTML += `<p>incorreto</p>`
            
            break  
        case 2:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
        case 3:
            msg.innerHTML += `<p>correto</p>`
            contador++;
            break
        case 4:
            msg.innerHTML += `<p>incorreto</p>`
            
            break
         

    }


    // document.write ('Parabéns, você acertou' + contador)
    msg.innerHTML = `<p> Parabéns, você acertou ${contador}!</p>`
}


// console.log("Questão 1 correta. Contador: " + contador)