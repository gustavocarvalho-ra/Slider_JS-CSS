// const ac = document.querySelector('.slide')
// const btn = document.querySelector('.win')

// btn.addEventListener('click', () => {
//   ac.classList.add('win')
// })

let count = 1
document.getElementById("radio1").checked = true;
  nextImg();
setInterval( function(){

}, 2000)

function nextImg(){
  count++;
  if(count>4){
    count = 1;
  }

  document.getElementById("radio1"+count).checked = true;

}