

document.querySelector("#add-time") //procurar botão

.addEventListener('click', cloneField) //quando clicar no botão

//executar função 
function cloneField() { 
   //Duplicar campos
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

   //limpar campos
   const fields = newFieldContainer.querySelectorAll('input')

   fields.forEach(function(field){
       //pegar o field do momento e limpa ele
        field.value = ""

   })


   //local onde adicionar campos
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
}