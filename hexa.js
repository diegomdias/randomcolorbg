const hex =  [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener("click",function(){
  let x = '#';
  for(let i = 0; i<6;i++){
    x += hex[getNumber()];
  }
  color.textContent = x;
  document.body.style.backgroundColor = x;
})

function getNumber(){
  return Math.floor(Math.random() * hex.length);
}
