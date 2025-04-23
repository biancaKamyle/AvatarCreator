//Exercício 1: nome do avatar

let textoNomeEl = document.querySelector("#nome-avatar");
let meuNomeAvatar = document.querySelector("#avatar-nome");

 textoNomeEl.addEventListener('change', () => meuNomeAvatar.innerHTML = textoNomeEl.value );

//Exercício 2: cor da pele

let corpoAvatar = document.querySelector("#avatar-corpo");
let cabecaAvatar = document.querySelector("#avatar-cabeca");
let avatarCorEl = document.querySelector("#cor-pele-avatar");

avatarCorEl.addEventListener('change', function ()  {
    corpoAvatar.style.backgroundColor = avatarCorEl.value;
    cabecaAvatar.style.backgroundColor = avatarCorEl.value;
} );

//Exercício 3: cabelo

let cabeloAvatarEl = document.querySelector("#avatar-cabelo");
let cabelo = document.querySelector("#Cabelo");

cabelo.addEventListener('click', () =>  cabeloAvatarEl.src = cabelo.value );

//Desafio 1: acessórios

let classiAcessorios = document.querySelectorAll(".avatar-acessorio");
let imputClassiEl = document.querySelectorAll(".acessorio-avatar");

for (let i = 0; i < classiAcessorios.length; i++) {
	imputClassiEl[i].addEventListener('click', function(e) {
  	let classiAcessoriosEl = e.currentTarget;
  	classiAcessoriosEl.classList.toggle('visivel');
  });
};

//Desafio 2: salvar o avatar (usando uma biblioteca JavaScript)







