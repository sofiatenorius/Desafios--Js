/* 
------------------------Seletores--------------

=> getElementById// trás apenas um elemnto, muito usado no IDS(element)
=>getElementByClassName()// Trás diversos elemntos (HTML colection que é uma coleção de elemntos HTMLN)= 
procura elemntos pela sua classe

=>getElementByTagName// oq é tag( p, h1), ai ele vai selecionar todas as tag paragŕafos(HTML colection)






=> querySelector// Trás apenas um elemento, o primeiro que encontrar (element), posso dar uma classe
um id, uma tag, não importa, ele vai me da o primeiro que ele econtrar, mesmo que tenha outros


Ex: 

const element= document.querySelector('#main-text)

=> querySelectorAll// Trás todos os elementos que ele encontrar (Nodelist)

const element= document.querySelectorAll('p') // vai trazer todos os parágrafos

Objetos NodeList são coleções de nodos semelhantes aos objetos retornados pelos métodos Node. childNodes e document. querySelectorAll() .
 Apesar de NodeList não ser um Array , é possível ser iterada usando o método forEach()




Posso chamar um elemento pelo nome dele também
 ex: html: <input name="myinput">
java script: 

const elemnt=document.getElementsByName ('myinput)


=>etElementsByName: Chama elemento pelo nome (nodelist23)


 => para selecionar atributos de um elemento (console.log(element.value))
 ou usa attribute

 ==========================MANIPULAÇAO DE TEXTO=======================================

 <h1> Meu primeiro site </h1>

 *js
 const element= document.querySelector('h1')    => selecionando o elemento que vou manipular
 element.innerText= "Hello World" (só consigo alterar o texto)
 ou posso usar textContent (só consigo alterar o texto)
 innerHTML(consigo adicionar mais código Html)

 ex: element.innerHTML="Hello world <p> my paragraph </p>" ( adiconeir um paraǵrafo)

 ==========================MANIPULAÇÃO DE ESTILOS ======================================

 const element= document.querySelector('h1')

 element.style.color='red'
=======================================EVENTO===========================================
html:
<button onclick="myfunction()"> Aperte aqui </button>

js :
const element=docuent.querySelector('button')
const myFunction=()=>{
    alert('Fui pressionado')
}

///////////////////////////////outra forma////////....
html:
<button>Aperte aqui </button>

js: 
const element= document.querySelector('button')

element.onclick=()=>{
    alert ('Fui pressionado')
}
===========================PARAMETROS DE EVENTO ============================================

<input blalal>
const element=docuent.querySelector ('input')

element.onkeypress=(event=>{
    console.log(event.target.value)
})

manipulando o o evento de digitação em sí, onde pego as informações de cada momento da digitação 
ex: de outros eventos que acontecem no meu HTML: Passar o mouse, clicar, digitar 

=========================EVENT LISTENING=============================================


Dispara algo que vai avisar toda vez que o determinado evento for disparado

--- aqui eu estou chaando esses elementos ------------


const input=document.querySelector('input')
consr select= document.querySelector ('select')
const button= docuent.querySelector('button)
----------------------------------------------------
-------------aqui eu estou dizendo pra ele que quando eu der um focus no input, ele impri
input.addEventListener('focus'),()=>{
    console.log('Dei um foco')
    
})

---------------outro exemplo -----------
button.addEventListener('click, ()=> {
    alert('O Botão foi clicado ' )
})

*/