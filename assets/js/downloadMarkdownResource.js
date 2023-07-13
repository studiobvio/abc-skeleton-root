function downloadMarkdownResource(frontMatter) {
  const titleSlug = frontMatter["title-slug"];
  let requestUrl;
  if (window.location.hostname === "localhost") {
    // Local development environment
    requestUrl = `${window.location.origin}${siteBaseUrl}/assets/md/2023-example-resource.md`;
  } else {
    // Production environment (GitHub Pages, etc.)
    requestUrl = `${siteUrl}${siteBaseUrl}/assets/md/2023-example-resource.md`;
  }
  // create XHR request
  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestUrl, true);

  // set up a callback function to handle the response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // get the template content from the response
      const templateResource = xhr.responseText;

      // combine front matter and template strings into full markdown string
      const fullMarkdown = `${frontMatter}${templateResource}`;

      // create a Blob object with the full markdown string
      const markdownBlob = new Blob([fullMarkdown], { type: "text/markdown" });

      // create a URL for the Blob object
      const markdownURL = URL.createObjectURL(markdownBlob);

      // create a link to download the file
      const downloadLink = document.createElement("a");
      downloadLink.href = markdownURL;
      downloadLink.download = `${titleSlug}.md`;
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // clean up
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(markdownURL);
    }
  };

  // send the request
  xhr.send();
}

// Call the downloadMarkdownResource function with the frontMatter parameter
downloadMarkdownResource(frontMatter);
