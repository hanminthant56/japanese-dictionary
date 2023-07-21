// preparing variable
let dropdownitem = document.getElementsByClassName("dropdown-item");
let jitaContainerbox = document.getElementById("jita-container");

//for dropdown click to change to show the datas 
for( var i=0; i < dropdownitem.length; i++){
    const dropdown = dropdownitem[i];
    //getting each dropdown by using for loop and getting dropdown data by clicking 
    dropdown.addEventListener("click", function(e) { 
        // to get the dropname attribute created by me
        dropname = e.target.attributes.dropname.value;
        //to get the dropdown list name
        let pagename = dropdown.textContent;
        // using for loop to get the show boxes
        // variable datasbox is in the han.js
        for(var j = 0; j < datasbox.length; j++) {
            const boxes = datasbox[j];
            // first, hide all the things and will show specific one
            boxes.classList.add("hmthide");
            // to get the datasboxname attribute that i created
            let datasboxname = boxes.attributes.datasboxname.value;
            // comparing from dropbox name and data box name to show specific one
            if ( dropname == datasboxname ) {
                // getting attribute that i created
                let bgcolor = boxes.attributes.hanbgcolor.value;
                //dropdownbtn is created in han.js
                dropdownbtn.style.backgroundColor = bgcolor;
                dropdownbtn.textContent = pagename;
                // create a session to save the page or box for the use
                sessionStorage.setItem('dropname', dropname);
                sessionStorage.setItem('bgcolor', bgcolor);
                sessionStorage.setItem('pagename', pagename);
                // first, have to remove hide class name coz there can be 
                boxes.classList.remove("hmthide");
                // and then show it 
                boxes.classList.add("hmtshow");
            }
        }
    } );
}

