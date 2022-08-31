

function arbolListo (){
    
    console.log("Contenidos del DOM cargado.")
    
    let body = document.querySelector('body')
    let textArea = document.querySelector("#origen")
    let p = document.createElement("p")
    let areaValor = ""
    function tomarValor (e){ 
        areaValor = e.target.value
       for(let i = 0; i < input.length; i++){
             input[i].disabled = false
        if (areaValor == ""){
            input[i].disabled = true
           }
           
       } 
     
    }

    textArea.addEventListener("input", tomarValor)
    
  
    textArea.value ="<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>"
 
    let input = document.getElementsByTagName('input')
    let agregar   = input[1]
    let agregar5  = input[2]
    let agregar10 = input[3]
    let agregarN  = input[4]
 
    let destino = document.querySelector("#destino")
    let reemplazar = document.getElementById("btn-reemplazar")
    
    reemplazar.addEventListener("click", function (){
        destino.textContent = areaValor})

        agregar.addEventListener("click", function(){
            destino.textContent += areaValor
        }) 

        agregar5.addEventListener("click", function(){
            destino.textContent += areaValor.repeat(5)
        })
        agregar10.addEventListener("click", function(){
            destino.textContent += areaValor.repeat(10)
        })
        agregarN.addEventListener("click", function(){
            let nro = prompt("Indique cuantas veces desea multiplicar:")
            destino.textContent += areaValor.repeat(nro)
        })

        let vaciar = input[5] 
        vaciar.addEventListener("click", function(){
            destino.textContent = ""
        })
        let mayus = input[6]
        mayus.addEventListener("click", function(e){ 
            let tiempoMayus = e.timeStamp
             let mayuscula = destino.textContent.toUpperCase()
             destino.textContent = mayuscula  
             if(tiempoMayus != 0){
                minus.disabled = false}
        })
       
        let minus = document.querySelector('button')
        minus.addEventListener('click', function(){
            let minuscula = destino.textContent.toLowerCase()
            destino.textContent = minuscula 
            minus.disabled = true
        })
 
        const pt7 = '[Ok]'
        const lista  = document.getElementsByTagName('li')
        console.log(lista)
        for(let value of lista){
             value.innerHTML = pt7 + value.innerHTML
        }
}   
document.addEventListener("DOMContentLoaded", arbolListo)




