// variable session
let kanjimastern3data = "";
let mastercount = 0;
let kanjimastern3container = document.getElementById("kanjimastern3-container");
let kanjimastern3eg = "";
let kanjimastern3others = "";

// function
// this function is created to use in map
function kanjimastern3list(list) {

    // i have to use mastercount becoz bs accordion need to be different
    mastercount += mastercount + 1;
    list.examples.map((e) => {
        kanjimastern3eg += `<p class='card-text'>`+ e +`</p>`;
        
    });
    list.otherUsages.map((o) => {
        kanjimastern3others += `<li class="list-group-item KMN3-others-lists">`+ o +`</li> `;
        
    });
    
    console.log("examples ",kanjimastern3eg);
    // for list, example
    //[
    //   [{"word":"取ります (自)", "meaning":"Take", "Eg":["年を取ります"]}],
    //]
    kanjimastern3data += `
    <div class="accordion" id="accordionBSPanelOne`+ mastercount +`">
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bspanelone`+ mastercount +`" aria-expanded="true" aria-controls="bspanelone`+ mastercount +`">
            `+ list.word +`
            </button>
            </h2>
            <div id="bspanelone`+ mastercount +`" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body KMN3-card-body">
                            訓読み：
                            <h5 class="card-title">`+ list.kunyomi +`</h5>
                            音読み：
                            <h5 class="card-title">`+ list.onyomi +`</h5>
                            例文：
                            ` + kanjimastern3eg + `
                            他の：
                            <ul class="list-group list-group-flush KMN3-others">
                                   `+ kanjimastern3others +`
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                        `;
}
                    kanjimastern3.map(kanjimastern3list);
                    // <h6 class="card-subtitle mb-2 text-body-secondary">NO DATA YET</h6>
// End For loop of the whole data
//preparing by adding all the data by adding to the relating box or pages
kanjimastern3container.innerHTML = kanjimastern3data;


