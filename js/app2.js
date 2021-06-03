var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// toggle to the dark-mode.

var checkbox = document.getElementById("nightmode"); //get the checkbox to a variable

//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dark") {
  darkmode(); //if dark mode was on, run this funtion
} else {
  nodark(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    darkmode(); //if the checkbox is checked, run this funtion
  } else {
    nodark(); //else run this funtion
  }
});

//function for checkbox when checkbox is checked
function darkmode() {
  document.body.classList.add("dark-mode"); //add a class to the body tag
  checkbox.checked = true; //set checkbox to be checked state
  sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {
  document.body.classList.remove("dark-mode"); //remove added class from body tag
  checkbox.checked = false; //set checkbox to be unchecked state
  sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}



var quotes;
quotes = ['"Today me will live in the moment, unless it\'s unpleasant, in which case me will eat a cookie."',
'"Life is short, eat cookies for breakfast."',
'"When You\'re Down and Feeling Worse, Keep a Cookie in Your Purse."',
'"Cookies are made of butter and love."',
' "If you can\'t change the world with chocolate chip cookies, how can you change the world?"',
' "A balanced diet is a cookie in each hand."'];



function sentence() {
  var rand1 = Math.floor(Math.random()*quotes.length);
  var content =quotes[rand1] ;

  document.getElementById('sentence').innerHTML = content;
};
console.log(sentence())
sentence();