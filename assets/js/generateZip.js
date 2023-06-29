var baseUrl = document.getElementById("base-url").getAttribute("data-base-url");

document
  .getElementById("generate-zip-btn")
  .addEventListener("click", function () {
    generateZip();
  });

function generateZip() {
  var zip = new JSZip();

  // Fetch the .md file
  fetch("/assets/md/2023-example-resource.md")
    .then((response) => response.text())
    .then((data) => {
      zip
        .folder("2023-example-resource")
        .file("2023-example-resource.md", data);
    });

  // Fetch the images one at a time
  fetch(
    baseUrl +
      "/assets/images/2023-example-resource/2023-example-resouce-Sunrise_Hot-Air-Balloons_Flight_Haarmans_2017.jpg"
  )
    .then((response) => response.blob())
    .then((blob) => {
      zip
        .folder("2023-example-resource/assets/images")
        .file(
          "2023-example-resouce-Sunrise_Hot-Air-Balloons_Flight_Haarmans_2017.jpg",
          blob
        );
    });

  fetch(
    baseUrl +
      "/assets/images/2023-example-resource/2023-example-resource_ABC-FUTURE-BELONGING-Sunrays_Architecture-Lobby_2023.png"
  )
    .then((response) => response.blob())
    .then((blob) => {
      zip
        .folder("2023-example-resource/assets/images")
        .file(
          "2023-example-resource_ABC-FUTURE-BELONGING-Sunrays_Architecture-Lobby_2023.png",
          blob
        );
    });

  fetch(
    baseUrl +
      "/assets/images/2023-example-resource/2023-example-resource_Utopia-Woodcut_Holbein_1518.jpg"
  )
    .then((response) => response.blob())
    .then((blob) => {
      zip
        .folder("2023-example-resource/assets/images")
        .file("2023-example-resource_Utopia-Woodcut_Holbein_1518.jpg", blob);
    });

  fetch(
    baseUrl +
      "/assets/images/2023-example-resource/2023-example-resource_ABC-dual-split-diagram_Martin_2022.png"
  )
    .then((response) => response.blob())
    .then((blob) => {
      zip
        .folder("2023-example-resource/assets/images")
        .file(
          "2023-example-resource_ABC-dual-split-diagram_Martin_2022.png",
          blob
        );
    });

  fetch(
    baseUrl +
      "/assets/images/2023-example-resource/2023-example-resource_ABC-evolution-diagram_Architecture-Lobby_2023.png"
  )
    .then((response) => response.blob())
    .then((blob) => {
      zip
        .folder("2023-example-resource/assets/images")
        .file(
          "2023-example-resource_ABC-evolution-diagram_Architecture-Lobby_2023.png",
          blob
        );
    });

  fetch(
    baseUrl +
      "/assets/images/2023-example-resource/2023-example-resource_ABC-network-diagram_Architecture-Lobby_2023.png"
  )
    .then((response) => response.blob())
    .then((blob) => {
      zip
        .folder("2023-example-resource/assets/images")
        .file(
          "2023-example-resource_ABC-network-diagram_Architecture-Lobby_2023.png",
          blob
        );
    });

  fetch(
    baseUrl +
      "/assets/images/2023-example-resource/2023-example-resource_ABC-submission-diagram_Architecture-Lobby_2023.png"
  )
    .then((response) => response.blob())
    .then((blob) => {
      zip
        .folder("2023-example-resource/assets/images")
        .file(
          "2023-example-resource_ABC-submission-diagram_Architecture-Lobby_2023.png",
          blob
        );
    });

  fetch(
    baseUrl +
      "/assets/images/2023-example-resource/2023-example-resource_Bazar.jpg"
  )
    .then((response) => response.blob())
    .then((blob) => {
      zip
        .folder("2023-example-resource/assets/images")
        .file("2023-example-resource_Bazar.jpg", blob);
    });

  fetch(
    baseUrl +
      "/assets/images/2023-example-resource/2023-example-resource_Sagrada-Familia.jpg"
  )
    .then((response) => response.blob())
    .then((blob) => {
      zip
        .folder("2023-example-resource/assets/images")
        .file("2023-example-resource_Sagrada-Familia.jpg", blob);
    });

  // Fetch the PDFs
  fetch(
    baseUrl +
      "/assets/pdf/2023-example-resource/2023-example-resource_Pedagogy-of-Potential_Martin_2022.pdf"
  )
    .then((response) => response.blob())
    .then((blob) => {
      zip
        .folder("2023-example-resource/assets/pdfs")
        .file(
          "2023-example-resource_Pedagogy-of-Potential_Martin_2022.pdf",
          blob
        );
    });

  // Generate and offer the zip file for download
  zip.generateAsync({ type: "blob" }).then((blob) => {
    // Create a download link for the zip file
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "2023-example-resource.zip";
    link.click();
  });
}
