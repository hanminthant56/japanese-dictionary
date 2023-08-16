let soun2data = "";
let soun2Container = document.getElementById("soun2-container");

// function
// this function is created to use in map
function soun2list(list) {
    // for list, example
    //[
    //   [{"word":"取ります (自)", "meaning":"Take", "Eg":["年を取ります"]}],
    //]

    let synonymbtn = "";
    if(list.synonym[0]) {
        
        synonymbtn += `
        <a tabindex="0" class="btn btn-dark btn-sm" role="button" 
            data-bs-toggle="popover" 
            data-bs-trigger="focus" 
            data-bs-content="`+ list.synonym +`">
            Synonym
        </a>
        `;
    }

    soun2data += `
    <div class="alert alert-dark mb-3 soun2-list" role="alert">
        `+ list.word +`
        <div>
        <a tabindex="0" class="btn btn-info" role="button" 
            data-bs-toggle="popover" 
            data-bs-trigger="focus" 
            data-bs-title="`+ list.meaning +`" 
            data-bs-content="`+ list.examples +`">
            Meaning
        </a>
        `+ synonymbtn +`
        </div>
    </div>
    `;
}
// this is mapping the array from database
soumatomen2.map(soun2list);

// End For loop of the whole data
//preparing by adding all the data by adding to the relating box or pages
soun2Container.innerHTML = soun2data;




