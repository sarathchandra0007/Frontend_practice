var header=document.querySelector("h1")

header.style.color="red"

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(){
  chcolor=getRandomColor()
  header.style.color=chcolor
}

// for (var i = 0; i < 100; i++) {
//   this.changeColor()
// }

//  setInterval("changeColor()",1)
