import {gfm} from 'micromark-extension-gfm';
import {toHtml} from 'hast-util-to-html';
import {fromMarkdown} from 'mdast-util-from-markdown';
import {gfmFromMarkdown} from 'mdast-util-gfm';
import {toHast} from 'mdast-util-to-hast';
import 'github-markdown-css/github-markdown.css';

/**
 * Convert markdown string to HTML string
 * https://github.com/syntax-tree/mdast-util-to-hast
 *
 * @param markdown
 * @param options
 * @returns {string}
 */
export function markdownToHtml(markdown, options = {allowDangerousHtml: true}){
    // markdown string => markdown tree
    const mdast = fromMarkdown(markdown, {
        extensions: [gfm()],
        mdastExtensions: [gfmFromMarkdown()]
    })

    // markdown tree => html tree
    const hast = toHast(mdast, options); // so-call tree

    // html tree => html string
    return toHtml(hast, options);
}