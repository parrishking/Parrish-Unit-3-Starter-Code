let button1 = document.querySelector(".option-one")
let button2 = document.querySelector(".option-two")
let button3 = document.querySelector(".option-three")
let Div = document.querySelector("div")
let optionOneScreen = document.querySelector(".option-one-screen")
let h1 = document.querySelector("h1")
let img = document.querySelector("img")
let optionTwoScreen = document.querySelector(".option-two-screen")
let optionOneEnd = document.querySelector(".option-one-end")
let optionTwoEnd = document.querySelector(".option-two-end")
let yes1 = document.querySelector(".yes1")
let yes2 = document.querySelector(".yes2")
let no1 = document.querySelector(".no1")
let no2 = document.querySelector(".no2")
let noend = document.querySelector(".no-end")
let refresh = document.querySelector(".Refresh")
let thunder = document.querySelector(".Thunder")
let spell1 = document.querySelector(".Spell1")
let laser = document.querySelector(".Laser")
let spell2 = document.querySelector(".Spell2")
let smash = document.querySelector(".Smash")
let spell3 = document.querySelector(".Spell3")
let slam = document.querySelector(".Slam")
let spell4 = document.querySelector(".Spell4")
let Secret = document.querySelector(".Secret")
let Ending = document.querySelector(".secret-ending")
let FinalYes = document.querySelector(".FinalYes")
let FinalNo = document.querySelector(".FinalNo")
let thunder2 = document.querySelector(".thunder2")
let slam2 = document.querySelector(".slam2")
let skillset = document.querySelector(".skillset")
let GameOver = document.querySelector(".The-End")
let Key = document.querySelector(".key")
let End6 = document.querySelector(".end6")

Secret.onclick = function() {
  button1.style.display = "none"
  button2.style.display = "none"
  img.style.display = "none"
  Secret.innerHTML = "Oh look, a key!"
  button3.style.display = "block"
  Key.style.display = "block"
}

button3.onclick = function() {
  Ending.style.display = "block"
  Secret.style.display = "none"
  button3.style.display = "none"
  Key.style.display = "none"
}

FinalYes.onclick = function() {
  skillset.style.display = "block"
  Ending.style.display = "none"
  FinalYes.style.display = "none"
  FinalNo.style.display = "none"
}

FinalNo.onclick = function() {
  skillset.style.display = "block"
  Ending.style.display = "none"
  FinalYes.style.display = "none"
  FinalNo.style.display = "none"
}

thunder2.onclick = function() {
  GameOver.style.display = "block"
  skillset.style.display = "none"
}

slam2.onclick = function() {
  GameOver.style.display = "block"
  skillset.style.display = "none"
}

button1.onclick = function() {
  Secret.style.display = "none"
  optionOneScreen.style.display = "block"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
}


button2.onclick = function() {
  Secret.style.display = "none"
  optionTwoScreen.style.display = "block"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
}


yes1.onclick = function() {
  optionOneEnd.style.display = "block"
  optionOneScreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
}

yes2.onclick = function() {
  optionTwoEnd.style.display = "block"
  optionTwoScreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
}

no1.onclick = function() {
  End6.style.display = "block"
  optionOneScreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
}

no2.onclick = function() {
  noend.style.display = "block"
  optionTwoScreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
  refresh.style.display = "block"
}

thunder.onclick = function() {
  spell1.style.display = "block"
  optionOneEnd.style.display = "none"
  optionOneScreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
  refresh.style.display = "block"
}

laser.onclick = function() {
  spell2.style.display = "block"
  optionOneEnd.style.display = "none"
  optionOneScreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
  refresh.style.display = "block"
}

smash.onclick = function() {
  spell3.style.display = "block"
  optionTwoEnd.style.display = "none"
  optionTwoScreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
  refresh.style.display = "block"
}


slam.onclick = function() {
  spell4.style.display = "block"
  optionTwoEnd.style.display = "none"
  optionTwoScreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
  refresh.style.display = "block"
}
