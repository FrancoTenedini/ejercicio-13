
function arbolListo (){
    console.log("Contenidos del DOM cargado.")
    let body = document.querySelector('body')
    
    let textArea = document.querySelector("#origen")
    let areaValor = ""
    let p = document.createElement('p')
    body.appendChild(p)
    console.log(areaValor)
    console.dir(textArea)
    let contenido = ""
    function tomarValor (e){
        areaValor = e.target.value
        console.log(areaValor)
       p.textContent = `Este contenido ${areaValor} está listo` 


       let input = document.getElementsByTagName('input')
/*        console.log(input) */
        for (let i = 0; i < input.length; i++){
           input[i].disabled = false
       } 
    }
    textArea.addEventListener("input", tomarValor)
    
    let reemplazar = document.getElementById("btn-reemplazar")
    console.log(reemplazar)
    let botonAgregar = document.querySelectorAll(".btn-agregar")
    

    }

document.addEventListener("DOMContentLoaded", arbolListo)




