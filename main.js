(function () {
    'use strict';
    var sushi = [...document.querySelectorAll('table.js-file-line-container tr .blob-code-inner')];
    var s = sushi.map(c => c.children.item(0));
    s.forEach(t => {if(t) if(!!t.innerText.match("^v-") || !!t.innerText.match("^\/v-")) { t.innerHTML = '<a target="_blank" class="'+t.className + '" href="https://vuetifyjs.com/en/api/'+ t.innerText +'">' + t.innerText + '</a>'}});
})()