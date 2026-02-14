window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',  // Enable equation numbering (ams style)
    tagSide: 'right',  // Position numbers on the right
    tagIndent: '0.8em',  // Indentation for equation numbers
    packages: {'[+]': ['color', 'html']},  // Load color and html packages
    macros: {
      label: ['\\label{#1}', 1],
      ref: ['\\ref{#1}', 1],
      eqref: ['\\eqref{#1}', 1]
    }
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
    enableAssistiveMml: true
  },
  loader: {
    load: ['[tex]/color', '[tex]/html', '[tex]/ams']
  },
  startup: {
    ready() {
      MathJax.startup.defaultReady();
      MathJax.startup.promise.then(() => {
        console.log('MathJax initial typesetting complete');
      });
    }
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})
