const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function startSeconds(segundos){
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

function iniciaRelogio() {
  timer = setInterval(function(){
    segundos++;
    relogio.innerHTML = startSeconds(segundos);
  }, 1000);
}

iniciar.addEventListener('click', function(){
   iniciaRelogio();
   relogio.classList.remove('pausado')
});

pausar.addEventListener('click', function(){
  clearInterval(timer);
  relogio.classList.add('pausado')
});

zerar.addEventListener('click', function(event){
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
  relogio.classList.remove('pausado')
});

