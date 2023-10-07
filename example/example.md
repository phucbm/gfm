# @phucbm/gfm

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

## Code highlight
`css`
```css
body {
    background-color:lightblue;
}

h1 {
    color:white;
    text-align:center;
}

p {
    font-family:verdana;
    font-size:20px;
}
```

`javascript`
```javascript
// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b){
// Function returns the product of a and b
    return a * b;
}
```