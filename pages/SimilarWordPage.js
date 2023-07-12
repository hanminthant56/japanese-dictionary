let similarworddata = "";
let similarwordContainer = document.getElementById("similarword-container");
// For loop of the whole data
// similarword variable is from similarWordDB.js file
for (let i = 0; i < similarword.length; i++) {
    const list = similarword[i];
    // for list, example
    //[
    //   [{"word":"取ります (自)", "meaning":"Take", "Eg":["年を取ります"]}],
    //]
    similarworddata += `
    <div class="alert alert-dark" role="alert">
        `+ list[0].word +`
        <a tabindex="0" class="btn btn-info" role="button" 
            data-bs-toggle="popover" 
            data-bs-trigger="focus" 
            data-bs-title="Word's meaning or pronounciation" 
            data-bs-content="NO Data yet">
            Meaning
        </a>
    </div>
    `;
}
// End For loop of the whole data
//preparing by adding all the data by adding to the relating box or pages
similarwordContainer.innerHTML = similarworddata;



