//add event listener to the input (focus/blur)
var firstNameInput = document.getElementById("first-name-input");
var lastNameInput = document.getElementById('last-name-input');
var firstLabel = document.getElementById("first-name");
var lastLabel = document.getElementById("last-name");


var inputClass = document.getElementsByClassName('space');
console.log(inputClass);
//add and remove guts for event listener functions


//focus/blur event listeners
firstNameInput.addEventListener("focus", function(){
   firstLabel.classList.add("label-up");
   firstLabel.classList.remove('label-down');
});

firstNameInput.addEventListener("blur", function(){
   if(firstNameInput.value === ""){
      firstLabel.classList.remove("label-up");
      firstLabel.classList.add('label-down');
   }
});

lastNameInput.addEventListener("focus", function(){
   lastLabel.classList.add("label-up");
   lastLabel.classList.remove('label-down');
});

lastNameInput.addEventListener("blur", function(){
   if(lastNameInput.value === ""){
      lastLabel.classList.remove("label-up");
      lastLabel.classList.add('label-down');
   }
});
