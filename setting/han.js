// variable session

// this variable is created here to use for session and also can being used in app.js for showing boxes or pages
let datasbox = document.getElementsByClassName("datas"); 
let homebox = document.getElementById("home");
let dropdownbtn = document.getElementById("dropdownbtn");
// this is bootstrap code to use popover

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


//create a session that is for users that they still can see the page or box which they opened
// getting dropname from session that i created from app.js
let sessionDropname = sessionStorage.getItem("dropname");
let sessionBgcolor = sessionStorage.getItem("bgcolor");
let sessionPagename = sessionStorage.getItem("pagename");
// starting for loop to get datas boxes or pages 
// And checking which box or page should be showed 
for (let s = 0; s < datasbox.length; s++) {
    const getbox = datasbox[s];
    dropdownbtn.classList.remove("hmthide");
    dropdownbtn.classList.add("hmtshow");
    // (start)this code copy from app.js 
    // to get the datasboxname attribute that i created
    let datasboxname = getbox.attributes.datasboxname.value;
    // changing the btn style
    dropdownbtn.style.backgroundColor = sessionBgcolor;
    dropdownbtn.textContent = sessionPagename;
    // checking session coz session can be null at 1st reload
    if( sessionDropname == null ) {
        dropdownbtn.textContent = "Home";
        // if session is null, have to remove hide class 
        // Coz home box is already defined to hide
        homebox.classList.remove("hmthide");
    }else {
        // there is a data in session
        // comparing from session dropbox name and data box name to show specific one
        if ( sessionDropname == datasboxname ) {
            // first, have to remove hide class name of specific one coz there can be 
            getbox.classList.remove("hmthide");
            // and then show it 
            getbox.classList.add("hmtshow");
        }
    }

    //(end)this code copy from app.js 
}
