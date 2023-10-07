import markdownText from "./example.md";
import {markdownToHtml} from "../src/markdown-to-html";
import {highlightCodeSyntax} from "../src/code-syntax-highlight";

const html = markdownToHtml(markdownText);

// view console log
console.log(html);

// or insert to the DOM
const content = document.querySelector('#content');
content.insertAdjacentHTML('beforeend', markdownToHtml(markdownText));

// code highlight
highlightCodeSyntax().then();