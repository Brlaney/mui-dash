<div align="center" id="top">
  <p>
    <a href="https://github.com/brlaney/mui-dash/commits/master">
      <img src="https://img.shields.io/github/last-commit/brlaney/mui-dash?style=flat-square">
    </a>
    <a href="#status"><img src="https://img.shields.io/badge/Maintained-yes-green.svg?style=flat-square"></a>
  </p>
  <h1>Mui-dash</h1>
  <h5>A custom Material-UI Dashboard template</h5>
  <p><b>Mui-dash</b> is a <b>Next.js app</b> that features multi-lingual support, Typescript, and Sass.</p>
</div>

</br>

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [Features](#features)
- [Quick Start](#quick-start)
    - [1. Clone repository](#1-clone-repository)
    - [2. Install dependencies](#2-install-dependencies)
    - [3. Ready for development](#3-ready-for-development)
- [Problem solving](#problem-solving)
- [Project code sumary](#project-code-summary)
- [Connect with me](#connect-with-me)
- [License](#license)
- [Contributions and issues](#contributions-and-issues)

</br>

## Features

- 🌎 Implements Next's [Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing) for multi-language support.
- Currently supported locales include (see figures below):
  - :america: English (en) - **figure 1.**
  - :mexico: Spanish (es) - **figure 2.**
  - :france: French (fr) - **figure 3.**
  - :india: Hindi (hi) - **figure 4.**
  - :china: Chinese (simplified) (zh) - **figure 5.**
- 🌐 The 3rd-party package **next-translate** was used to simplify each locales import - [next-translate's repository](https://github.com/vinissimus/next-translate)
- ✅ Built from Material-UI's `Dashboard Template`. The [source code](https://github.com/mui-org/.material-ui/tree/next/docs/src/pages/getting-started/templates/dashboard) and the live sample site can be found [here](https://mui.com/getting-started/templates/dashboard/).

</br>
</br>

<div align="center">
  <h4>English, en - figure 1.</h4>
  <img src="https://user-images.githubusercontent.com/64326462/135640665-0facac18-1584-4cfd-899e-449bad0f3db8.png" alt="english-locale"  align="center" />
</div>

</br>
</br>

<div align="center">
  <h4>Spanish, es - figure 2.</h4>
  <img src="https://user-images.githubusercontent.com/64326462/135640660-0bc5a345-0223-43fa-a837-6ea977eb34c3.png" alt="spanish-locale"  align="center" />
</div>

</br>
</br>

<div align="center">
  <h4>French, fr - figure 3.</h4>
  <img src="https://user-images.githubusercontent.com/64326462/135640661-e62d3c04-3fb7-400b-b922-fdeede170e7e.png" alt="french-locale"  align="center" />
</div>

</br>
</br>

<div align="center">
  <h4>Hindi, hi - figure 4.</h4>
  <img src="https://user-images.githubusercontent.com/64326462/135640663-45322286-c910-4d52-a4e8-d58b4800346e.png" alt="hindi-locale"  align="center" />
</div>

</br>
</br>

<div align="center">
  <h4>Chinese (simplified), zh - figure 5.</h4>
  <img src="https://user-images.githubusercontent.com/64326462/135640664-47600f2f-923d-4419-b069-206eb46ba945.png" alt="chinese-locale"  align="center" />
</div>

</br>

## Quick Start

### 1. Clone repository

```C
git clone https://github.com/Brlaney/mui-dash.git
```

### 2. Install dependencies

```
cd mui-dash

# then for yarn users:
yarn install

# or npm users:
npm i 
```

### 3. Ready for development

```C
yarn dev

#or

npm run dev

```

Now navigate to [http://localhost:3000/](http://localhost:3000/) and check it out.

</br>

## Problem solving

In this section I will sumarize my problem solving process for any issues that arose while creating this project. Issues, bugs, errors, etc. yield critical points in any project were you are presented with the opportunity to evolve your web development skills - after all, Engineering at its core *is* **problem solving**.

## Project code summary

- **Date updated:** `09-30-2021`
- **First commit:** `08-20-2021`
- **Directory:** `\mui-dash\src`
- **Totals:** 
  - `30 files`
  - `2554 lines of code`
  - `2 comments` 
  - `107 blanks`
  - **Sum total** `2,663 lines`

### Languages
| language | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| TypeScript | 16 | 1,806 | 0 | 28 | 1,834 |
| TypeScript React | 11 | 674 | 2 | 64 | 740 |
| SCSS | 3 | 74 | 0 | 15 | 89 |

### Directories
| path | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| src/ | 30 | 2,554 | 2 | 107 | 2,663 |
| src/components | 8 | 493 | 1 | 39 | 533 |
| src/lib | 16 | 1,806 | 0 | 28 | 1,834 |
| src/pages | 3 | 181 | 1 | 25 | 207 |
| src/scss | 3 | 74 | 0 | 15 | 89 |

</br>

## Connect with me

- Email: <brlaney@outlook.com>
- Twitter: [brendan_webdev](https://twitter.com/Brendan_webdev)
- Instagram: [brlaney94](https://www.instagram.com/brlaney94/)

</br>

## License

This repository was built on Material-UI's official [Dashboard](https://github.com/mui-org/material-ui/tree/next/docs/src/pages/getting-started/templates/dashboard) template. All of their templates can be found [here](https://next.material-ui.com/getting-started/templates/). I am not the original author of the *template* this project was built on-top of. I have added features, re-structured components, and added my own code to the aforementioned template in order to better fit my needs.

</br>

```
MIT License

Copyright (c) 2021

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</br>

## Contributions and issues

I would love your feedback on my project - please feel free to make a pull request or submit an issue if you find any. Thanks for checking out my project!
