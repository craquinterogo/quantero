window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',  // Enable equation numbering (ams style)
    tagSide: 'right',  // Position numbers on the right
    tagIndent: '0.8em'  // Indentation for equation numbers
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// For Material for MkDocs instant loading
if (typeof document$ !== 'undefined') {
  document$.subscribe(() => { 
    MathJax.typesetPromise()
  })
}
