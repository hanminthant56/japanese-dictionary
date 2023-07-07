let data = "";
let count = 0;
let wordContainer = document.getElementById("word-container");
// For loop of the whole data
for (let i = 0; i < jitadata.length; i++) {
    count += count + 1;
    const list = jitadata[i];
    data += `
   <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
        <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen`+ count +`" aria-expanded="true" aria-controls="panelsStayOpen`+ count +`">
        `+ list[0].word +`
        </button>
        </h2>
        <div id="panelsStayOpen`+ count +`" class="accordion-collapse collapse show">
            <div class="accordion-body">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">`+ list[0].meaning +`</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}
// End For loop of the whole data
wordContainer.innerHTML = data;


