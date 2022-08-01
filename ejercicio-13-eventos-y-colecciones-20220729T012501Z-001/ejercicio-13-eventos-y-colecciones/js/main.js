
function arbolListo (){
    console.log("Contenidos del DOM cargado.")
    
    
    let lista = document.getElementsByTagName('li')
    let body = document.querySelector('body')
    let textArea = document.querySelector("#origen")
    let areaValor = ""
    let p = document.createElement('p')
    body.appendChild(p)
    let contenido = ""
    function tomarValor (e){ 
       areaValor = e.target.value
       console.log(areaValor)
       p.textContent = `Este contenido ${areaValor} está listo` 
     
/* 
       agregar.addEventListener("click", function (e){
        console.log(destino.innerHTML)
        destino.textContent += areaValor  
        console.dir(destino)
    }) */
           
       for(let i = 0; i < input.length; i++){
        input[i].disabled = false
        if (areaValor == ""){
            input[i].disabled = true
           }
         
       } 
      
      
    }
    textArea.addEventListener("input", tomarValor)
    
    

    let input = document.getElementsByTagName('input')
    console.log(input)
    let agregar = input[1]
    console.log(agregar)
    let agregar5 = input[2]
    let agregar10 = input[3]
    let agregarN = input[4]
 
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
            console.log(tiempoMayus)
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

        console.log(lista[2])
        let lista1 = lista[2]
        console.dir(lista1)
    }
    

    
    
 
document.addEventListener("DOMContentLoaded", arbolListo)




