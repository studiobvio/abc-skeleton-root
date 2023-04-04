function generateMarkdown() {
  // get values from form inputs
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var date = document.getElementById("date").value;
  var category = document.getElementById("category").value;

  // create YAML front matter string
  var frontMatter = "---\n";
  frontMatter += "title: " + title + "\n";
  frontMatter += "author: " + author + "\n";
  frontMatter += "date: " + date + "\n";
  frontMatter += "category: " + category + "\n";
  frontMatter += "---\n";

  // create markdown template
  var markdownTemplate = "<!-- Enter your content here -->";

  // create markdown with front matter and template
  var markdown = frontMatter + "\n" + markdownTemplate + "\n";

  // display markdown in code block
  var codeBlock = document.getElementById("markdown-code");
  codeBlock.textContent = markdown;

  // download markdown file
  var fileName = title.toLowerCase().replace(/ /g, "-") + ".md";
  var blob = new Blob([markdown], { type: "text/markdown" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}
