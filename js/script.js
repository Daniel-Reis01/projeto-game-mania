//function mostrarpopup(){//
 //   window.alert("hello world")//
//}
let email = document.getElementById("campo email");

function enviarEmail(){
    let emailDigitado = email.Value;
    console.log(emailDigitado)
}

let listaProdutos = [
 {
    titulo: "pc gamer ",
    descriçao:"pc gamer",
}
]
function renderizarprodutos(){
    let espaco = document.getElementById("produtos gamer")

let template = "" ,

for (let index = 0; index < listaprodutos.length; index++) {
    const produtos = listaprodutos[index];
 
          template += `<div id="produtos gamer" class="produtos ">
          <h2>Promoçao</h2>
          <img src="img/play.png" alt="foto do playstation gamer em promoçao"width="200px">
          <h3>Produto em Promoçao</h3>
          <p>Valor:2500</p>
          </div>`
}  

espaco.innerHTML = template;
}
