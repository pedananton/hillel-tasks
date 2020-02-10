'use strict';

//import loadScript from "./utils/loadScript.js";
import loadScriptWithPromise from "./utils/loadScript.js";

const elements = {
    runCode: document.getElementById('runCode'),
    codeEditor: document.getElementById('codeEditor'),
    errorView: document.getElementById('errorView'),
    scriptLoader: document.getElementById('scriptLoader'),
    loadAllScripts: document.getElementById('loadAll'),
};

elements.runCode.addEventListener('click', () => {
    elements.errorView.textContent = '';
    eval(elements.codeEditor.innerText);
});

// TODO: Используйте async/await
elements.scriptLoader.addEventListener('click', (e) => {
    // NOTE: Обратите внимание, что мы используем event bubbling здесь
    if (!e.target.matches('button[data-src]')) {
        return;
    }
    const button = e.target;

  /*  loadScript(button.dataset.src)
         .then(() => {
             button.disabled = true;
         })
         .catch(err)
             , function (err) {
         if (err) {
             throw err;
         }    
   }
         })*/ 
        let loadScript = new Promise(function(res, rej){
            res(button.dataset.src);
            rej((err)=>{throw err})
        });
        loadScript.then(() => {
            button.disabled = true;
        })
});

// TODO: Используйте async/await + Promise.all
/*
elements.loadAllScripts.addEventListener('click', (e) => {
    const scriptButtons = elements.scriptLoader.querySelectorAll('button[data-src]');
    const scriptSrcs = [...scriptButtons].map(button => button.dataset.src);

    console.log('TODO: script srcs', scriptSrcs);
    alert('NOT IMPLEMENTED')
})
*/

elements.loadAllScripts.addEventListener('click', async (e) => {
    const scriptButtons = elements.scriptLoader.querySelectorAll('button[data-src]');
        const scriptSrcs = [...scriptButtons].map(button => button.dataset.src);
        await Promise.all(scriptSrcs.map(loadScriptWithPromise));
})

window.onerror = function (e, source, line, col, error) {
    const message = `Unhandled error occured on line ${line} and column ${col} in file: ${source}\n\n${error}`;
    elements.errorView.textContent = message;
};

window.onunhandledrejection = function (e) {
    const message = `Unhandled promise rejection: ${e.reason}`;
    elements.errorView.textContent = message;
};
