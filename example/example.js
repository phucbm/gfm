import markdownText from "./example.md";
import 'github-markdown-css/github-markdown.css';
import {highlightCodeSyntax} from "../src/code-syntax-highlight";

// the Markdown text will be converted to HTML text using "markdown-loader"
console.log(markdownText);

const content = document.querySelector('#content');

// insert the HTML text to the DOM
content.insertAdjacentHTML('beforeend', markdownText);

// code highlight
highlightCodeSyntax().then();