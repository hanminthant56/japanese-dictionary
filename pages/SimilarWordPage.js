let similarworddata = "";
let similarwordContainer = document.getElementById("similarword-container");

// function
// this function is created to use in map
function similarwordlist(list) {
    // for list, example
    //[
    //   [{"word":"取ります (自)", "meaning":"Take", "Eg":["年を取ります"]}],
    //]
    similarworddata += `
    <div class="alert alert-dark mb-3 similarword-list" role="alert">
        `+ list.word +`
        <a tabindex="0" class="btn btn-info" role="button" 
            data-bs-toggle="popover" 
            data-bs-trigger="focus" 
            data-bs-title="Word's meaning or pronounciation" 
            data-bs-content="NO Data yet">
            Meaning
        </a>
    </div>
    `;
    // there is space that i created to seperate for the different words
    switch(list.space) {
        case "needed":
            similarworddata += "<hr>";
            break;
        case "little needed":
            similarworddata += "<hr class='mb-2 mt-0'>";
    }
}
// this is mapping the array from database
similarword.map(similarwordlist);

// End For loop of the whole data
//preparing by adding all the data by adding to the relating box or pages
similarwordContainer.innerHTML = similarworddata;



