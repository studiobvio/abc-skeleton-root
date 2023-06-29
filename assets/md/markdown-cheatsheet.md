# Markdown Introduction

I've read this already, jump to the [Markdown for ABC Repository Cheatsheet](#cheatsheet)

This document is intended to provide a quick reference and showcase of the recommended Markdown syntax for documents being prepared for the ABC Repository. This resource is not extensive as it only included limited set of functionality to preserve consistency accross all respository content.The ABC Repository is hosted on GitHub Pages which used GitHub Flavored Markdown syntax which extented the original Markdown specifications. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/).

Depending on what Markdown editor you are using, the editor may give you the option to render markdown syntax within document itself, outside of a preview mode. Editing Markdown in the mode, while helpful for visualizing the render output similar to the "What You See Is What You Get" word-processors, it is not recommended for those learning the Markdown syntax for the first time. While you are learning to write in Markdown, we recommend that you disable any automatic rendering of this sort, which will allow you to remain in the "What You See is What You Mean" mode that will be more condusive to an effective resource submission. 

Below we have included recommended setting for our recommended lighweight, free and open source software (FOSS) Markdown editors [Zettlr](https://www.zettlr.com/), [MarkText](https://github.com/marktext/marktext#download-and-installation), and [Abricotine](https://abricotine.brrd.fr/). As well as our recommended fully featured source-code editor [VS Codium](https://vscodium.com/)(the Open Source version of Microsoft's VS Code). We have included code blocks of each element, so that an unrendered version of the text will accompany the element regardless of whether or the Markdown is being rendered.

## Markdown Editor Settings and Document Preview

When editing Markdown it is essential to remember that the final rendered styling of your document will depend on the styling of the document where it is being rendered. Therefore, styling in the preview mode of your prefered Markdown editor will be different than the styling that is applied on the ABC Repository website. It will also be different depending on which Markdown editor you are using. Nevertheless, it is essential to periodically render a preview your Markdown in whatever editor your are using. Doing so will help you confirm that you have applied the Markdown systax appropriately and that your external links (be they images, videos, or websites) are functioning properly.  As you become familiar with the Markdown syntax, it will be helpful to have certain elements (ie images and iframes for videos) automatically render in your editor. You may turn those and any other rendering option back on at any time as you feel comfortable.

### Zettlr

Zettlr automaticly renders certain Markdown syntax by default. To turn this automatic rendering off navigate to File → Preferences → Preferences  then select the "Monitor" icon where you can deselect elements to be automatically rendered within the editor.  To preview the rendered document export the document to HTML and load it into a web browers. Zettlr allows for HTML file to be exported as a temporary file (which will automatically open in your default web brower) or to your current directory (which will save an HTML file to your project folder that you may load manually into any browers). By downloading the HTML file into the root of your directory, all relative links will remain continue to function (see [Images](#images) below). Access both these options by navigating to File → Export (cmd/ctrl E) in the menu bar. 

### MarkText

MarkText allows you to toggle on and off "Source-Code Mode" in the by going to View → Source Code Mode in the menu. You can also use the keyboard shortcut (cmd/ctrl E) to toggle between the preview and source code modes.

### Abricotine

Abricotine automaticly renders certain Markdown syntax by default. To turn this automatic rendering off, navigate to View → Auto Preview and deselect the options from there. You may also export the document to HTML by navigating to File → Export as HTML → Github template which will open an dialogue box for you to save the HTML file. For relative links to images (see [Images](#images) below) to work properly, save the html file in the root folder where you are working on you project.

### VSCodium

VSCodium, our recommended Markdown editor for those who are familiary with source-code editors or other integrated development enviornments, provide robust support for Markdown. Learn more about the Markdown workflow in VSCodium [here](https://code.visualstudio.com/docs/languages/markdown)

<a name="cheatsheet"/>
## Markdown for ABC Repository Cheatsheet 
<a name="toc"/>

##### Table of Contents

[Headers](#headers)  
[Emphasis](#emphasis)  
[Lists](#lists)  
[Links](#links)  
[Images](#images)  
[Code and Syntax Highlighting](#code)  
[Footnotes](#footnotes)  
[Tables](#tables)  
[Blockquotes](#blockquotes)  
[Inline HTML](#html)  
[Horizontal Rule](#hr)  
[Line Breaks](#lines)  
[YouTube Videos](#videos)  
[Comments](#comments)

<a name="headers"/>

## Headers

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

# H1

## H2

### H3

#### H4

##### H5

###### H6

<a name="emphasis"/>

## Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

<a name="lists"/>

## Lists

Two (2) leading spaces require generate indentation for sublist items

1. First ordered list item

2. Another item
   
   * Unordered sub-list. 

3. Actual numbers don't matter, just that it's a number
   
   1. Ordered sub-list

4. And another item.
   
   You can have properly indented paragraphs within list items by adding the proper number of leading spaces at the beginning of the paragraph.
* Unordered list can use asterisks
- Or minuses
+ Or pluses

<a name="links"/>

## Links

```
[Inline link text](http://www.thewebpageaddress.com)
```

[I'm an inline-style link](https://architecture-lobby.org/)

___

```
[Inline link text](http://www.thewebpageaddress.com "Your Link Title")
```

 [I'm an inline-style link with title](https://architecture-lobby.org/ "The Architecture Lobby's Homepage")

___

You can also create relative links to other repository files

```
[Inline link text](../directory/file/path)
```

 [I'm a relative reference to a repository file](../resources/2023-example-resource/2023-example-resource)

___

Or leave it empty and use the link text itself inside square brackets.

```
[http://www.thewebpageaddress.com]
```

 [https://architecture-lobby.org/]

___

URLs and URLs in angle brackets will automatically get turned into links. 

```
http://www.thewebpageaddress.com.
```

 https://architecture-lobby.org/

___

You may also link to specific locations in your document and even create a table of contents like the one above by creating a link with a location name `[Inline Link Text](#document-location-name)` and then adding a corresponding named html hyperlink tags `<a name= "document-location-name"/>` at the beginning of the location in the document you wish to have the link navigate.

```
[A link to the table of contents](#toc)
```

[A link to the table of contents](#toc)

<a name="images"/>

## Images

Images can be pulled from the web with a source link or from a file location on the repository. Given the dynamic nature of the web, we require that any images that you include in your resource be uploaded with your submission and linked to in your document in a consistent file path location. 

This method has several important benefits:

1. __Avoiding broken links:__ Your resource content will remain intact if other external website where you sourced your images were to ever move.
2. __Consistent Rendering On Your Local Computer and the Web:__ By using a consistent relative path to your images, you can ensure that when your resource is published to the repository that your images will render appropriately.

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's -- support syntax highlighting. There are many resources available for learning Markdown syntax for code and codeblocks that are outside of the scope of this document. For contributors who wish to include code blocks with their resource refer to GitHub Docs [here](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)

<a name="footnotes"/>

## Footnotes

Footnotes aren't part of the core Markdown spec, but they [supported by GFM](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#footnotes). As a result, footnote syntax may not be functional in some Markdown editors and they are almost always a little tricky as they require two elements that are in different places in the document (where you are adding your footnote and the location where the reference text resides. In others, you need to turn on footnote functionality. To turn on footnote functionality in MarkText, go to Fille → Preferences → Markdown and navigate to the "Markdown Extension:" area and enable Pandoc-style footnotes (requires a restart). Many editors have shortcuts or insert options from menus that making footnoting easier. Zettlr also provides direct editing options that you can learn about in the docs [here](https://docs.zettlr.com/en/core/editor/#working-with-footnotes)

Here is a simple footnote[^1].

You can also use words but they cannot contain any spaces. We ask that you provide figure footnotes with "Fig-Number." Here is an example of image citation[^Fig-1].

Im adding filler text to represent the rest of the document.

Footnotes:
[^1]: My reference.

Figure Notes:
[^Fig-1]: Figure Footnotes should include citation information about who authored the image, where it was found, and any licensing information. 

<a name="tables"/>

## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM. 

```no-highlight
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      | $12   |
| zebra stripes | are neat      | $1    |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

```
Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown                | Less      | Pretty     |
| ----------------------- | --------- | ---------- |
| *Still*                 | `renders` | **nicely** |
| 1                       | 2         | 3          |
| <a name="blockquotes"/> |           |            |

## Blockquotes

```no-highlight
> Blockquotes are very handy for longer quotes.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

<a name="html"/>

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well. For the simplicity and accessiblity of the text, we prefer that resource submisison adhere predominantly to the Markdown syntax (GitHub Flavored Markdown more specifically) so we aren't including examples here.

<a name="hr"/>

## Horizontal Rule

There are multiple ways to add a horizontal rule in Markdown. We recommend three (3) or more __underscores__ so not to confuse the syntax for the frontmatter of the Markdown document which uses three hyphens.

Example

```
Three or more...

___

Underscores
```

Three or more...

___

Underscores

<a name="lines"/>

## Line Breaks and Paragraphs

Line breaks, also known as soft returns, signify the end of a line but not the end of a paragraph. While line breaks can be created several ways, we recommend a trailing `\` at the end of the line. This method is more readable than the alternative of inserting two blank spaces at the end of the line.

```
This is a line break.\  
This following text is in the same paragraph block as the line above.
```

*Example:*
This is a line break.\  
This following text is in the same paragraph block as the line above.

___

Simply hitting the return key once, without the trailing `\`, will render the hard return the same as a single space.

```
This a single hard return.(Enter Key)
This text following the hard return will continue in the same paragraph but without a line break.
```

*Example:*
This a single hard return.
This text following the hard return will continue in the same paragraph but without a line break.

___

Paragraphs represent different blocks of text and are created by two or more hard returns which create one or more blank lines between them.

```
Paragraphs have at least one blank line between them. (Enter Key)
(Enter Key)
The second paragraph will be it a new block of text.
```

*Rendered Example*:
Paragraphs have at least one blank line between them.

The second paragraph will be it a new block of text.

<a name="videos"/>

## Videos

The simplest and safest way to include videos in your resource is to create an image link to the website that hosts them. This is relatively easy to do with YouTube videos.

#### Videos from Youtube

```no-highlight
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```

<a href="http://www.youtube.com/watch?feature=player_embedded&v=iCoJu3tmuNg
" target="_blank"><img src="http://img.youtube.com/vi/iCoJu3tmuNg/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="15" /></a>

Or, in pure Markdown, but losing the image sizing and border:

```no-highlight
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/iCoJu3tmuNg/0.jpg)](http://www.youtube.com/watch?v=iCoJu3tmuNg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/iCoJu3tmuNg" frameborder="0" allowfullscreen></iframe>

<a name="comments"/>
## Comments

To hide contents in a Markdown document, one can use the HTML comment syntax:

<!-- This is comment and won't be rendered! -->

---

License: [CC-BY](https://creativecommons.org/licenses/by/3.0/)
