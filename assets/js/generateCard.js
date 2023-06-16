function generateCard() {
  // get user inputs
  const title = document.getElementById("title").value;
  const subtitle = document.getElementById("subtitle").value;
  const contenttype = document.getElementById("content-type").value;
  const authorfirst = document.getElementById("author-first").value;
  const authorlast = document.getElementById("author-last").value;
  const categories = document.getElementById("categories").value.split(",");
  const tags = document.getElementById("tags").value.split(",");
  const hashes = document.getElementById("hashes").value.split(",");
  const abstractshort = document.getElementById("abstract-short").value;
  const abstractlong = document.getElementById("abstract-long").value;

  var htmlCard = `
    <div class="card h-100" style="margin: 8px">
      <div class="card-header"> ${contenttype}</div>
      <img
        src="{{site.baseurl}}/assets/images/tal_logo.jpg"
        class="card-img-top"
        alt="You will add your own key image when you submit"
      />
      <div class="card-body">
        <h5 class="card-title fw-bolder">${title}</h5>
        <h6 class="car-subtitle mb-2 text-muted">${subtitle}</h6>
        <h6 class="fst-italic">
          by ${authorfirst} ${authorlast}
        </h6>
        <p class="card-text text-small">${abstractshort}</p>
        <h4>
          <button
            class="btn btn-light btn-sm"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-{{ item.title | slugify }}"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Learning Outcomes
          </button>
        </h4>
        <div
          id="collapse-{{ item.title | slugify }}"
          class="collapse"
          data-bs-parent=".card"
        >
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-small text-muted">Output</li>
          </ul>
        </div>
      </div>
    </div>`;

  //Display the generated HTML content

  document.getElementById("output-htmlCard").innerHTML = htmlCard;
}
