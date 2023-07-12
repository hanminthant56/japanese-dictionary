// preparing variable
let dropdownitem = document.getElementsByClassName("dropdown-item");
let jitaContainerbox = document.getElementById("jita-container");

//for dropdown click to change to show the datas 
for( var i=0; i < dropdownitem.length; i++){
    //getting each dropdown by using for loop and getting dropdown data by clicking 
    dropdownitem[i].addEventListener("click", function(e) { 
        // to get the dropname attribute created by me
        dropname = e.target.attributes.dropname.value;
        // using for loop to get the show boxes
        // variable datasbox is in the han.js
        for(var j = 0; j < datasbox.length; j++) {
            // first, hide all the things and will show specific one
            datasbox[j].classList.add("hmthide");
            // to get the datasboxname attribute that i created
            let datasboxname = datasbox[j].attributes.datasboxname.value;
            // comparing from dropbox name and data box name to show specific one
            if ( dropname == datasboxname ) {
                // create a session to save the page or box for the use
                sessionStorage.setItem('dropname', dropname);
                // first, have to remove hide class name coz there can be 
                datasbox[j].classList.remove("hmthide");
                // and then show it 
                datasbox[j].classList.add("hmtshow");
            }
        }
    } );
}

