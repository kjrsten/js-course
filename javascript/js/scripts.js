var greeting = "Hello, ";
var name = "Kjrsten";
var doButton = document.querySelector("#do_button");

function sayHello(){
  console.info(greeting+name);
  alert(greeting+name);
}

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  console.info("Hello from wordBlanks");
  var result = "The "+myAdjective+" "+name+" "+myVerb+" "+myAdverb+" , "+greeting;
  alert(result);
  return result;
}

doButton.onclick = function() {
  console.info("HELLOOOO");
  //sayHello();
  wordBlanks("dog", "big", "ran", "quickly");
}
