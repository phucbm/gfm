# @phucbm/gfm

[![pages-build-deployment](https://github.com/phucbm/gfm/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/phucbm/gfm/actions/workflows/pages/pages-build-deployment)
[![release](https://badgen.net/github/release/phucbm/gfm/)](https://github.com/phucbm/gfm/releases/latest)
[![npm](https://badgen.net/npm/v/@phucbm/gfm)](https://www.npmjs.com/package/@phucbm/gfm)
[![license](https://badgen.net/github/license/phucbm/gfm/)](https://github.com/phucbm/gfm/blob/main/LICENSE)

> Turn Markdown text into [GitHub Flavored Markdown](https://github.github.com/gfm/) (GFM) with light/dark code syntax
> highlight.

## What is this?

Ever want to just write Markdown for your app, then make it to HTML with the styling from GitHub, along with code syntax
highlight? This project was made for you.

- Markdown to HTML using [`markdown-loader`](https://www.npmjs.com/package/markdown-loader) (webpack)
- Light/dark GFM styling
  from [sindresorhus/generate-github-markdown-css](https://github.com/sindresorhus/generate-github-markdown-css)
- Code syntax highlight using [`starry-night`](https://github.com/wooorm/starry-night)

## Install

Install with [npm](https://docs.npmjs.com/cli/install):

```shell
npm i @phucbm/gfm

# webpack loader for markdown
npm i markdown-loader

# styling for GFM
npm i github-markdown-css
```

## Use

### Convert Markdown format using `markdown-loader` by [`markedjs`](https://marked.js.org/)

Say our document `example.md` contains:

<details><summary>View example.md</summary>

```markdown
# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b | c | d |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done
```

</details> 

To be able to read the `.md` file format, add [`markdown-loader`](https://www.npmjs.com/package/markdown-loader) to
your `webpack.config.js`

```javascript
// webpack.config.js
export default {
    module: {
        rules: [
            // Markdown
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            // Pass options to marked
                            // See https://marked.js.org/using_advanced#options
                        },
                    },
                ],
            },
        ],
    },
};
```

…and our module `example.js` looks as follows:

```js
import markdownText from "./example.md";
import 'github-markdown-css/github-markdown.css';

// the Markdown text will be converted to HTML text using "markdown-loader"
console.log(markdownText);

const content = document.querySelector('#content');

// insert the HTML text to the DOM
content.insertAdjacentHTML('beforeend', markdownText);
```

...with the `index.html` as below

<details><summary>View index.html</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@phucbm/gfm</title>
    <style>
        body {box-sizing:border-box; margin:0;}
        .container {
            min-width:300px;
            max-width:980px;
            margin-left:auto;
            margin-right:auto;
            padding:45px;
        }

        @media (max-width:767px) {
            .container {
                padding:15px;
            }
        }
    </style>
</head>
<body class="markdown-body">
    <div class="container">
        <div id="content"></div>
    </div>
</body>
</html>
```

</details>

See [how it looks like](https://phucbm.github.io/gfm/).

### Code highlight

Your Markdown code block must have a language identifier like in the `example.md`, then run `highlightCodeSyntax()` only
when the HTML has loaded.

```javascript
import {highlightCodeSyntax} from "@phucbm/gfm";

// insert HTML

// code highlight (only run once the HTML as loaded)
highlightCodeSyntax().then();
```

> **Info**
> Check the folder `example` for demo files.

## API

### `highlightCodeSyntax(codeBlocks)`

Loop through all `<code>` in the DOM and replace with highlighted code syntax.

###### Parameters

- `codeBlocks` - HTMLElement, optional.

###### Return

`{Promise<HTMLElement[]>}`

## Development

Clone this repo, then:

```shell
# install
npm i

# run dev server
npm run dev
```

## License

MIT © [Phuc Bui](https://github.com/phucbm)
