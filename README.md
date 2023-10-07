# @phucbm/gfm

> Turn Markdown text into [GitHub Flavored Markdown](https://github.github.com/gfm/) (GFM) with light/dark code syntax
> highlight.

## What is this?

This package provides a blazing fast way to turn your Markdown file into HTML text that support GFM syntax and code
highlight, just like GitHub.

[When to use this?](https://github.com/syntax-tree/mdast-util-gfm#when-to-use-this)

## Install

Install with [npm](https://docs.npmjs.com/cli/install):

```shell
npm i @phucbm/gfm
```

## Use

Say our document `example.md` contains:

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

…and our module `example.js` looks as follows:

```js
import markdownText from "./example.md";
import {markdownToHtml} from "@phucbm/github-markdown";

const html = markdownToHtml(markdownText);

// view console log
console.log(html);

// or insert to the DOM
const content = document.querySelector('#content');
content.insertAdjacentHTML('beforeend', markdownToHtml(markdownText));
```

See [demo](#)

## API

### `markdownToHtml(markdown, options)`

Convert Markdown text to HTML text.

###### Parameters

- `markdown`
- `toHastOptions` ([Options](https://github.com/syntax-tree/mdast-util-to-hast#options)) - configurations, default
  is `{allowDangerousHtml: true}`
- `toHtmlOptions` ([Options](https://github.com/syntax-tree/hast-util-to-html#options)) - configurations, default
  is `{allowDangerousHtml: true}`

###### Return

An HTML string.

## License

MIT © [Phuc Bui](https://github.com/phucbm)