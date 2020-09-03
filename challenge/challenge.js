
function how_old(){
 const bornyear = prompt("which year were you born?");
 const now = 2020;
 z = now - bornyear;
 const days = z * 365;
  document.getElementById("para").innerHTML =("už jsi na světě " + days + " dní");
}
//  var ageindays = (2020-bornyear)*360;

// }
//
// function reset(){s
// document.getElementById("para").outerHTML = "";
// }



// function how_old(){
//  var bornyear = prompt("which year were you born?");
//  var ageindays = (2020-bornyear)*360;
//  document.getElementById("para").innerHTML =("už jsi na světě " + ageindays + " dní");
// }
