
var cost = 0.00;
function buyPizza(){
  cost = (cost+1.75);
  var element = document.getElementById("id01");

element.innerHTML = cost;
  
}
function buyIC(){
  cost = (cost+.75);
  var element = document.getElementById("id01");
element.innerHTML = cost;
  
}