// variable session
let jitadata = "";
let count = 0;
let jitaContainer = document.getElementById("jita-container");

// function
// this function is created to use in map
function jitalist(list) {

    // i have to use count becoz bs accordion need to be different
    count += count + 1;
    // for list, example
    //[
    //   [{"word":"取ります (自)", "meaning":"Take", "Eg":["年を取ります"]}],
    //]
    jitadata += `
    <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
        <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen`+ count +`" aria-expanded="true" aria-controls="panelsStayOpen`+ count +`">
        `+ list[0].word +`
        </button>
        </h2>
        <div id="panelsStayOpen`+ count +`" class="accordion-collapse collapse">
            <div class="accordion-body">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">`+ list[0].meaning +`</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">NO DATA YET</h6>
                        <p class="card-text">Maybe sentence example</p>
                        <a href="#" class="card-link">no data</a>
                        <a href="#" class="card-link">coming soon</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
}
jita.map(jitalist);
// End For loop of the whole data
//preparing by adding all the data by adding to the relating box or pages
jitaContainer.innerHTML = jitadata;


