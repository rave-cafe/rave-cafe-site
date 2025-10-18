---
title: "web support"
date: 2025-08-17
---

## why?

Web support is about making a simple web site to break out of being locked into only using platforms others control. The web was designed around open protocols to be decentralized & collaborative.

The web as we know it today was designed to share science papers between universities. In 1989 Sir Tim Berners Lee developed HTML - hypertext markup language - which is what the letters you're reading right now are encoded in and HTTP - hypertext transfer protocol - which is how the HTML got to your computer. He also developed the URL - uniform resource locater - which routes the HTML to the right place using words you can remember like [rave.cafe](http://rave.cafe). URLs were built on top of a US DoD technology from the 70's called TCP/IP - transfer control protocol / internet protocol - which was designed to reliably transfer packages of information over computer networks to your IP address.

We'll be building a website together over the course of three weeks.

## when?

Mon, Oct 27 - 7pm - 8pm - Getting Started

Mon, Nov 3 - 7pm - 8pm - HTML & CSS

Mon, Nov 10 - 7pm - 8pm - Hosting & JavaScript

## where?

Discord's voice channel - #cube-score

## prerequisites

Bring an idea to share of what you want your website to be about. It could be: I'm going to make a website about my cat.

Download [VS Code](https://code.visualstudio.com/) - a way to edit the text files that will make up your website

//////////////////////////////////////

## web support documentation

Below you'll find documentation if you'd like do this async or refer back to something we covered during one of our sessions.

### basic terminal usage

The terminal (also called command line or shell) is a text-based way to interact with your computer. Don't worry - it's simpler than it looks!

**Opening the terminal:**

- **Mac**: Press `Cmd + Space`, type "Terminal", press Enter
- **Windows**: Press `Windows key`, type "Command Prompt" or "PowerShell", press Enter

**Essential commands:**

- `pwd` - "print working directory" - shows where you are
- `ls` (Mac) or `dir` (Windows) - lists files in current folder
- `cd foldername` - "change directory" - moves into a folder
- `cd ..` - goes up one folder
- `mkdir foldername` - creates a new folder
- `code .` - opens current folder in VS Code (after installing VS Code)

**Example workflow:**

```bash
pwd                    # see where you are
mkdir my-website       # create a folder for your website
cd my-website          # move into that folder
code .                 # open it in VS Code
```

### setting up github

GitHub is a website that stores your code online and tracks changes. Think of it as a combination of Dropbox and a time machine for your code.

**Step 1: Create a GitHub account**

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Choose a username, enter your email and password
4. Verify your email

**Step 2: Install Git**

- **Mac**: Open Terminal and type `git --version` - if it's not installed, macOS will prompt you to install it
- **Windows**: Download from [git-scm.com](https://git-scm.com/download/win) and install with default settings

**Step 3: Configure Git** (in your terminal)

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

**Step 4: Create your first repository**

1. On GitHub.com, click the "+" icon in top right
2. Click "New repository"
3. Name it `my-first-website`
4. Check "Add a README file"
5. Click "Create repository"

**Step 5: Clone it to your computer**

1. On your repo page, click the green "Code" button
2. Copy the URL
3. In terminal:

```bash
cd ~                                    # go to your home folder
git clone YOUR-URL-HERE                 # paste the URL you copied
cd my-first-website                     # move into the folder
```

### your first html file

HTML is the language that structures web pages. Start with this basic template:

**Create a file called `index.html`:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is a website.</p>

    <script src="script.js"></script>
  </body>
</html>
```

You can also use this [HTML template on GitHub](https://github.com/mdn/beginner-html-site-styled) from Mozilla as a starting point.

### learning resources

**HTML Basics:**

- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) - the gold standard tutorial
- [HTML Tutorial for Beginners](https://www.w3schools.com/html/) - interactive examples you can try
- [FreeCodeCamp HTML Course](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app) - learn by building

**CSS Basics:**

- [MDN CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) - styling your pages
- [CSS Tutorial for Beginners](https://www.w3schools.com/css/) - comprehensive guide
- [FreeCodeCamp CSS Course](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-basic-css-by-building-a-cafe-menu) - hands-on practice

**JavaScript Basics:**

- [MDN JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [JavaScript Tutorial](https://www.w3schools.com/js/)
- [FreeCodeCamp JavaScript Course](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-introductory-javascript-by-building-a-pyramid-generator)

### hosting

GitHub Pages lets you host your website for free!

**Step 1: Make sure your files are ready**

- Your main HTML file should be named `index.html`
- All files should be in your GitHub repository

**Step 2: Commit and push your files**

```bash
git add .                              # stage all files
git commit -m "Add my first website"   # save the changes
git push                               # upload to GitHub
```

**Step 3: Enable GitHub Pages**

1. Go to your repository on GitHub.com
2. Click "Settings" (top right)
3. Click "Pages" (left sidebar)
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a minute, then refresh - you'll see your site URL!

Your site will be at: `https://your-username.github.io/my-first-website/`

**Updating your site:**
Every time you make changes:

```bash
git add .
git commit -m "describe what you changed"
git push
```

Your site updates automatically in a few seconds!

```

```
