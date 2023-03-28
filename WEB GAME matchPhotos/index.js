var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
let count = 0;
let selected = [];
setInterval(setTime, 1000);




var photosArr = ["cat.jpg", "diamonds.jpg", "earth.jpg", "fireworks.jpg", "flower.jpg", "minions.jpg", "mountain.jpg", "pepe.jpg", "photograph.jpg", "steve.jpg","cat.jpg", "diamonds.jpg", "earth.jpg", "fireworks.jpg", "flower.jpg", "minions.jpg", "mountain.jpg", "pepe.jpg", "photograph.jpg", "steve.jpg"];
let shuffledArray = shuffle(photosArr);

var blocks = document.getElementsByClassName("theback");
for(let i = 0; i < 20; i++){
    blocks[i].style.backgroundImage = `url("./img/${shuffledArray[i]}")`
}

function flip(id){
  if(count == 2){
    return 0;
  }
  if(count == 1){
    selected.push(id)
    selected.push(document.getElementById(id).getElementsByClassName('theback')[0].style.backgroundImage)  
    document.getElementById(id).classList.toggle("reverse") 
    setTimeout(() => { 
      if(selected[1] == selected[3]){
        console.log(document.getElementById(selected[0]).getElementsByClassName("theback")[0])
        console.log(document.getElementById(selected[2]).getElementsByClassName("theback")[0].style.backgroundImage)
      document.getElementById(selected[0]).getElementsByClassName("theback")[0].style.backgroundImage = "url('./img/done.jpg')"
      document.getElementById(selected[2]).getElementsByClassName("theback")[0].style.backgroundImage = "url('./img/done.jpg')"
      //here later will write disable
      count = 0;
      selected = [];
    }else{
      document.getElementById(selected[0]).classList.toggle("reverse") 
      document.getElementById(selected[2]).classList.toggle("reverse") 
      count = 0;
      selected = [];

    }; }, 500);
   
  }else{
    selected.push(id)
    selected.push(document.getElementById(id).getElementsByClassName('theback')[0].style.backgroundImage)  
    document.getElementById(id).classList.toggle("reverse") 
    count+=1;
  }
}

function checkIfDone(){
  let is = true;
  let docs = document.getElementsByClassName("theback")
  for(let i = 0; i < 20; i++){
    if(docs[i].style.backgroundImage == "url('./img/done.jpg')"){
      continue;
    }else{
      is = false;
      break;
    }
  }
}


function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }
  
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    
    
    while (currentIndex != 0) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

