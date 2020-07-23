
// Get the modal
var modal1 = document.getElementById("project-1-detail");
var modal2 = document.getElementById("project-2-detail");

// Get the button that opens the modal
var btn1 = document.getElementById("project-1");
var btn2 = document.getElementById("project-2");


// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function modal(event) {
  if (event.target == modal1)
   {
    modal1.style.display = "none";
  }
  if (event.target == modal2)
  {
   modal2.style.display = "none";
 }
 
}

