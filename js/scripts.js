const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Have a nice day";
} else {
  greeting = "Good evening";
}
document.getElementById("sentence").innerHTML = greeting;


function contact() {
    document.getElementById("output").innerHTML = "Email: <a href=\"mailto:leenmh223@gmail.com\">leenmh223@gmail.com</a><br>Phone: +9639********<br>City: Damascus";
  }

function over(){
    document.getElementById("text").style.color='pink';
}

function out(){
    document.getElementById("text").style.color='white';
}


