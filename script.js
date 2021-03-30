const colors = ['GREEN','RED', 'BLUE', 'YELLOW',"ALICEBLUE","ANTIQUEWHITE","AQUA","AQUAMARINE","AZURE","BEIGE","BISQUE","BLANCHEDALMOND","BURLYWOOD","CADETBLUE","CHARTREUSE","CHOCOLATE","CORAL","CORNFLOWERBLUE","CORNSILK","CRIMSOM","CYAN","DARKBLUE","DARKCYAN","DARKGOLDENROD","DARKGRAY","DARKGREY","DARKGREEN","DARKKHAKI","DARKMAGENTA","DARKOLIVEGREEN","DARKORANGE","DARKORCHILD","DARKRED","DARKSALMON","DARKSEAGREEN","DARKSTATEBLUE","DARKSLATEGRAY", "DARKSLATEGREY", "DARKTURQUOISE", "DARKVIOLET","DEEPPINK","DEEPSKYBLUE","DIMGRAY","DODGERBLUE","FIREBRICK","FUCHSIA","GOLD", "GOLDENROD", "GREENYELLOW", "INDIGO", "INDIANRED","LIGHTSEAGREEN",
               "OLIVE","TEAL","TOMATO","SLATEGREY","SLATEBLUE","PALEVIOLETRED"]
const btn = document.querySelector('#btn');
const color = document.querySelector('.color')

btn.addEventListener("click",function(){
  const randomNumber = getNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getNumber(){
  return Math.floor(Math.random() * colors.length);
}
