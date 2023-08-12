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

// ့!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! here also make some check and make real your package
function han(hanAttri) {
    let attri = document.querySelector(hanAttri);
    function createhanToggleBtn(icon1, icon2, attriId, color='#4672fe') {
        let i = 0, icon1text = "", icon1class = "",icon2text = "", icon2class = "";
        while(i < icon1.length) {
            if(icon1[i] == "class") {
                icon1class = icon1[i+1];
            }
            if(icon1[i] == "text") {
                icon1text = icon1[i+1]
            }
            i++;
        }
        i = 0;
        while(i < icon2.length) {
            if(icon2[i] == "class") {
                icon2class = icon2[i+1];
            }
            if(icon2[i] == "text") {
                icon2text = icon2[i+1]
            }
            i++;
        }
        let toggleBtnElement = `
            <label for="`+ attriId +`checkbox" class="han-togglebtn-toggler" id="`+ attriId +`">
                <input type="checkbox" class="han-togglebtn-checkbox" id="`+ attriId +`checkbox">
                <span class="han-togglebtn-ball"></span>
                <i class="`+ icon1class +` han-togglebtn-icon1">`+ icon1text +`</i>
                <i class="`+ icon2class +` han-togglebtn-icon2">`+ icon2text +`</i>
            </label>
        `; 
        
        
        attri.innerHTML = toggleBtnElement;
        
    }

    function togglebtnLeftvalue() {
        console.log("run left")
        return "left;"
        
    }
    function togglebtnRightvalue() {
        console.log("run right")
        return "Right;"

    }
    
    
    function hantogglebtnValue(e) {
        let togglerid = "#" + hanAttri + "toggler";
        let togglebtn = document.querySelector(togglerid);
        let checkboxid = "#" + hanAttri + "checkbox"; 
        let checkbox = document.querySelector(checkboxid);
        if(e.pointerId == -1) {
            if(checkbox.checked == true) {
                return "right"
            }else{
                return "left"
            }
        }
    }

    // checkboxCheck is check box is  checked and uncheck
    // this check have to be true or false
    function checkBox(checkboxProp = 'checked', checkboxCheck) {
        attri.checked = checkboxCheck;
    }

    // this is for innerhtml js attribute
    function hanInnerHtml(hanHtml) {
        attri.innerHTML = hanHtml;
    } 
    
    return {
        prop: checkBox,
        html: hanInnerHtml,
        makeTogBtn: createhanToggleBtn,
        TogBtnValue: hantogglebtnValue,
    }
}
