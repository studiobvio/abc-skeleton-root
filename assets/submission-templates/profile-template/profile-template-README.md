---
---

## Understanding the folder and file structure

Within the `lastname-firstname-dd.md` file you will find the following folder and file structure.

```
lastname-firstname-dd (this is the "root" folder)
  lastname-firstname-dd.md
  lastname-firstname-dd.jpg
  - assets
    - images
      imagedescription-imageauhtorlastname-YYYY.jpg
    - downloads
      lastname-firstname-dd-resume.pdf
```

The folders and files in the document demonstrates the required naming conventions and folder structure that will be maintained throughout your profile page submission.

`lastname-firstname-dd` folder is the root folder that you will submit with all the rest of your content within it.

The structure of the root folder and content naming conventions should be consistent across all profile pages submissions. Below you will note the `./` annotation which signifies "inside the root folder" and subsquent `/` connote another folder. This is important as you learn to reference your assets in you Markdown file.

Within the roof file you will find:

`./lastname-firstname-dd.md` file is the Markdown document that will include the "Profile Submission Form Frontmatter" and the content of your profile page (including references to any image or downloadable pdfs you wish to include)
`./lastname-firstname-dd.jpg` file is a profile picture that will display in association with your profile. The images should be square and no larger than 400px.
`./assets` folder is where you will include any files, including images and downloadable files, that you wish to include with your profile page.
`./assets/images` foulfolder you will include any image that is referenced in your profile Markdown file. For your images to render properly, they should be renamed be all lowercase, include no special character or spaces. Please replace any spaces or underscores with single dashes (`-`). We also request that your images include short descriptive title, the image authors last name, and the year the image was created. The example image `imagedescription-imageauhtorlastname-YYYY.jpg` demonstrates a conforming image file name.

## Creating and Editing your Profile Page

To begin creating your own profile page:

1. Go to the [Profile Submission Form]() page, fill in the forms to automatically generate the appropriately formatted Frontmatter for your profile Markdown file.
2. Copy and Paste your personal Frontmatter into the Frontmatter location on your Mardkown file. \*Note that the `name-slug:` value that is generated will be your unique `lastname-firstname-dd` identifier.
3. Rename the files and folders with your unique `name-slug` identifier.
4. Open the `lastname-firstname-dd.md` (now renamed) and add your own text and images as you wish. \*Note that there is no need to include social media or website link as you provided those in you front matter and they will be autmoatically rendered with your profile even if you do not included them in your profile page content section.
5. Note the syntax for adding images and downloades in the template and emulate that syntax to add images from your `./assets/images` folder and downloadable material from your `./assets/downloads`.
   - _Note that all images start with a `!`followed by altnerate text in square brackets `[ ]` folloed by the relative path to the image in parentheses `( )`. Each image relative path should include `./assets/images` before your image file nam including file extentions (ie .jpg or .png)._
   - _Note that all links to downloaded content include "link text" in square brackets `[ ]` followed by the relative path to the file to be downloaded in parentheses `( )`. Each downloadbale file relative path should start with `./assets/downloads` before your pdf file name including file extension (ie. .pdf)._
6. Some of the form inputs are limited to one automatic input/output but you may add more if you wish by directly editing the Frontmatter section.

```
---
layout: profile
published: true
permalink:
date: 2023-03-22
content-type: "Bio"
categories:
  - "Contributor"
  - "Maintainer"
tags:
  - "Commoning"
  - "Solidarity"
  - "Organizing"

name: "Will Martin"
name-slug: "martin-will-10-09"
name-date: "09"
location: "Denver, Colorado"
role: "Neighbor"
statement: "Doing awesome stuff across the globe"
personal-website: "https://studiobvio.com"
social:
  - name: "Instagram"
    handle: "studiobvio"
    link: "https://www.instagram.com/studiobvio/"
  - name: "LinkedIn"
    handle: "william-martin-62034114"
    link: "https://www.linkedin.com/in/william-martin-62034114/"
affiliations:
  - name: "University of Colorado Denver, College of Architecture and Planning"
    location: Denver, Colorado
    link:
    titles:
      - "Lecturer, Studio Instructor"
  - name: "The Architecture Lobby"
    location:
    titles:
      - "Founder"
  - name: "Studiobvio"
    location: Denver, Colorado
    titles:
      - "Founder"
---
```
