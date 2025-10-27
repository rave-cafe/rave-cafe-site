---
title: "web support"
date: 2025-08-17
---

## why?

Web support is about making a simple web site to break out of being locked into only using platforms others control. The web was designed around open protocols to be decentralized & collaborative.

The web as we know it today was designed to share science papers between universities. In 1989 Sir Tim Berners Lee developed HTML - hypertext markup language - which is what the letters you're reading right now are encoded in and HTTP - hypertext transfer protocol - which is how the HTML got to your computer. He also developed the URL - uniform resource locater - which routes the HTML to the right place using words you can remember like [rave.cafe](http://rave.cafe). URLs were built on top of a US DoD technology from the 70's called TCP/IP - transfer control protocol / internet protocol - which was designed to reliably transfer packages of information over computer networks to your IP address.

## when?

Mon, Nov 3 - 7pm - 8pm - Getting Started with Github, HTML, CSS

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

GitHub is a website that stores your code online and tracks changes. Git is a tool that you use to track your changes as you work on code and Github is a website where you can push up those changes to be hosted so you can collaborate with others or host your code.

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

### setting up live server in vs code

Before you start building your website, install the Live Server extension in VS Code. This will let you see your changes instantly in the browser as you code!

**Step 1: Install the Live Server extension**

1. Open VS Code
2. Click the Extensions icon in the left sidebar (or press `Cmd+Shift+X` on Mac, `Ctrl+Shift+X` on Windows)
3. Type "Live Server" in the search box
4. Look for "Live Server" by Ritwick Dey (it has millions of downloads)
5. Click the blue "Install" button

**Step 2: Use Live Server**

Once installed, there are two ways to start it:

**Option 1:** Right-click on your `index.html` file and select "Open with Live Server"

**Option 2:** Click the "Go Live" button in the bottom-right corner of VS Code

**What happens:**

- Your browser will open automatically
- You'll see your website at something like `http://127.0.0.1:5500`
- Every time you save a file, the browser refreshes automatically - no need to manually reload!

**To stop Live Server:**

- Click "Port: 5500" in the bottom-right corner, or
- Close the browser tab

**Why this is awesome:**

- See changes instantly as you type
- No need to keep refreshing your browser
- Works with HTML, CSS, and JavaScript changes
- Makes learning much faster and more fun!

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

### your first css file

CSS (Cascading Style Sheets) is what makes your website look good. It controls colors, fonts, spacing, layouts, and more.

**Create a file called `style.css` in the same folder as your `index.html`:**

```css
/* This is a comment in CSS */

/* Style the entire page */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
}

/* Style headings */
h1 {
  color: #333;
  font-size: 36px;
}

/* Style paragraphs */
p {
  color: #666;
  line-height: 1.6;
  font-size: 18px;
}
```

**How CSS works:**

CSS uses **selectors** to target HTML elements and apply **styles** to them:

```css
selector {
  property: value;
}
```

**Common CSS properties:**

- `color` - text color
- `background-color` - background color
- `font-size` - size of text
- `font-family` - which font to use
- `margin` - space outside an element
- `padding` - space inside an element
- `border` - border around an element
- `width` / `height` - size of an element

**Example: Styling a button**

In your HTML:

```html
<button class="my-button">Click me!</button>
```

In your CSS:

```css
.my-button {
  background-color: #4caf50;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.my-button:hover {
  background-color: #45a049;
}
```

**The three ways to add CSS:**

1. **External stylesheet** (recommended) - like we did above with `style.css`
2. **Internal styles** - in the `<head>` section:
   ```html
   <style>
     h1 {
       color: blue;
     }
   </style>
   ```
3. **Inline styles** - directly on elements (not recommended):
   ```html
   <h1 style="color: blue;">Hello</h1>
   ```

**Tips:**

- Use classes (`.classname`) for reusable styles
- Use IDs (`#idname`) for unique elements
- Colors can be written as names (`red`), hex codes (`#ff0000`), or RGB (`rgb(255, 0, 0)`)
- Test your changes by opening `index.html` in a browser

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
