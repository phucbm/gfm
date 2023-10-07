import {common, createStarryNight} from '@wooorm/starry-night';
import {toDom} from 'hast-util-to-dom';
import './starry-night@3.0.0.css';

/**
 * Highlight code syntax (run this function after HTML has loaded)
 * https://github.com/wooorm/starry-night#example-using-starry-night-on-the-client
 *
 * @param codeBlocks
 * @param options
 * @returns {Promise<HTMLElement[]>}
 */
export async function highlightCodeSyntax(codeBlocks = document.body.querySelectorAll('code'), options = {fragment: true}){
    const starryNight = await createStarryNight(common)

    const prefix = 'language-'

    const nodes = Array.from(codeBlocks);

    for(const node of nodes){
        // <code class*="language-">
        const className = Array.from(node.classList).find(function(d){
            return d.startsWith(prefix)
        })
        if(!className) continue;

        // get language scope
        const scope = starryNight.flagToScope(className.slice(prefix.length))
        if(!scope) continue;

        // code string => highlighted html tree
        const tree = starryNight.highlight(node.textContent, scope);

        // html tree => html DOM
        node.replaceChildren(toDom(tree, options));
    }
}
