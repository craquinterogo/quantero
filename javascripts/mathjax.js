window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',  // Enable equation numbering (ams style)
    tagSide: 'right',  // Position numbers on the right
    tagIndent: '0.8em',  // Indentation for equation numbers
    packages: {'[+]': ['color', 'html']}  // Load color and html packages
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  loader: {
    load: ['[tex]/color', '[tex]/html']
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})
