//add event listener to the input (focus/blur)
var input = document.getElementById("first-name");
var label = document.getElementById("label1");


input.addEventListener("focus", function(){
   console.log('is too a function')
   label.classList.add("label");
   label.classList.remove('focus');
});

input.addEventListener("blur", function(){
   if(input.value === ""){
      label.classList.remove("label");
      label.classList.add('focus');
   }
});
