let dropdownitem = document.getElementsByClassName("dropdown-item");
// document.addEventListener('click', function(e) {
//   e = e || window.event;
//   let target = e.target || e.srcElement;
//   let classname = target.className;
//   let text = target.innerText;
//   console.log(e);
//   console.log("\n")
//   console.log(classname, text)
// })
for( var i=0; i<dropdownitem.length; i++){
    dropdownitem[i].addEventListener("click", function() { console.log(this); } );
}