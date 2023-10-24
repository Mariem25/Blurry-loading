let bg = document.querySelector('.bg');
let txt = document.querySelector('.txt');
console.log(bg)
let fun = setInterval(blur,30);
let load = 0;
function blur(){
  load++;

  if(load==100){
    clearInterval(fun);
  }

  bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
  txt.style.opacity = scale(load,0,100,1,0);
  txt.textContent = `${load}%`;

}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}