let num = 0;
function handleStartBtn(){
  var flag = setInterval(function(){
    var i = this.getRandomIndex();
    document.getElementsByClassName('has-pic')[0]?document.getElementsByClassName('has-pic')[0].classList.remove("has-pic"):null;
    document.getElementById(''+i).classList.add("has-pic");
  },500)
  setTimeout(function(){
    clearInterval(flag);
    alert("game over")
  },10000)
}
function handleClickPic(e){
  var target = e.currentTarget;
  if(/has-pic/.test(target.className)){
    num=num+1;
    document.getElementsByClassName("score")[0].innerHTML = num;
  }
}
function getRandomIndex(){
  return parseInt(Math.random()*6+1,10);
}