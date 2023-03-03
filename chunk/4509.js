"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[4509],{"4509":function(n){n.exports=JSON.parse('{"version":3,"names":["patchBrowser","importMeta","import","meta","url","opts","resourcesUrl","URL","href","promiseResolve","then","options","bootstrapLazy","JSON","parse"],"sources":["../../node_modules/.pnpm/registry.npmjs.org+@stencil+core@2.22.2/node_modules/@stencil/core/internal/client/patch-browser.js","@lazy-browser-entrypoint?app-data=conditional"],"sourcesContent":["/*\\n Stencil Client Patch Browser v2.22.2 | MIT Licensed | https://stenciljs.com\\n */\\nimport { BUILD, NAMESPACE } from \'@stencil/core/internal/app-data\';\\nimport { consoleDevInfo, plt, win, doc, promiseResolve, H } from \'@stencil/core\';\\n/**\\n * Helper method for querying a `meta` tag that contains a nonce value\\n * out of a DOM\'s head.\\n *\\n * @param doc The DOM containing the `head` to query against\\n * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag\\n * exists or the tag has no content.\\n */\\nfunction queryNonceMetaTagContent(doc) {\\n    var _a, _b, _c;\\n    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector(\'meta[name=\\"csp-nonce\\"]\')) === null || _b === void 0 ? void 0 : _b.getAttribute(\'content\')) !== null && _c !== void 0 ? _c : undefined;\\n}\\nconst getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\\\\s|-/g, \'_\')}`;\\nconst patchBrowser = () => {\\n    // NOTE!! This fn cannot use async/await!\\n    if (BUILD.isDev && !BUILD.isTesting) {\\n        consoleDevInfo(\'Running in development mode.\');\\n    }\\n    if (BUILD.cssVarShim) {\\n        // shim css vars\\n        plt.$cssShim$ = win.__cssshim;\\n    }\\n    if (BUILD.cloneNodeFix) {\\n        // opted-in to polyfill cloneNode() for slot polyfilled components\\n        patchCloneNodeFix(H.prototype);\\n    }\\n    if (BUILD.profile && !performance.mark) {\\n        // not all browsers support performance.mark/measure (Safari 10)\\n        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,\\n        // simply stub the implementations out.\\n        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)\\n        // @ts-ignore\\n        performance.mark = performance.measure = () => {\\n            /*noop*/\\n        };\\n        performance.getEntriesByName = () => [];\\n    }\\n    // @ts-ignore\\n    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim\\n        ? Array.from(doc.querySelectorAll(\'script\')).find((s) => new RegExp(`\\\\/${NAMESPACE}(\\\\\\\\.esm)?\\\\\\\\.js($|\\\\\\\\?|#)`).test(s.src) ||\\n            s.getAttribute(\'data-stencil-namespace\') === NAMESPACE)\\n        : null;\\n    const importMeta = import.meta.url;\\n    const opts = BUILD.scriptDataOpts ? scriptElm[\'data-opts\'] || {} : {};\\n    if (BUILD.safari10 && \'onbeforeload\' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {\\n        // Safari < v11 support: This IF is true if it\'s Safari below v11.\\n        // This fn cannot use async/await since Safari didn\'t support it until v11,\\n        // however, Safari 10 did support modules. Safari 10 also didn\'t support \\"nomodule\\",\\n        // so both the ESM file and nomodule file would get downloaded. Only Safari\\n        // has \'onbeforeload\' in the script, and \\"history.scrollRestoration\\" was added\\n        // to Safari in v11. Return a noop then() so the async/await ESM code doesn\'t continue.\\n        // IS_ESM_BUILD is replaced at build time so this check doesn\'t happen in systemjs builds.\\n        return {\\n            then() {\\n                /* promise noop */\\n            },\\n        };\\n    }\\n    if (!BUILD.safari10 && importMeta !== \'\') {\\n        opts.resourcesUrl = new URL(\'.\', importMeta).href;\\n    }\\n    else if (BUILD.dynamicImportShim || BUILD.safari10) {\\n        opts.resourcesUrl = new URL(\'.\', new URL(scriptElm.getAttribute(\'data-resources-url\') || scriptElm.src, win.location.href)).href;\\n        if (BUILD.dynamicImportShim) {\\n            patchDynamicImport(opts.resourcesUrl, scriptElm);\\n        }\\n        if (BUILD.dynamicImportShim && !win.customElements) {\\n            // module support, but no custom elements support (Old Edge)\\n            // @ts-ignore\\n            return import(/* webpackChunkName: \\"polyfills-dom\\" */ \'./dom.js\').then(() => opts);\\n        }\\n    }\\n    return promiseResolve(opts);\\n};\\nconst patchDynamicImport = (base, orgScriptElm) => {\\n    const importFunctionName = getDynamicImportFunction(NAMESPACE);\\n    try {\\n        // test if this browser supports dynamic imports\\n        // There is a caching issue in V8, that breaks using import() in Function\\n        // By generating a random string, we can workaround it\\n        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info\\n        win[importFunctionName] = new Function(\'w\', `return import(w);//${Math.random()}`);\\n    }\\n    catch (e) {\\n        // this shim is specifically for browsers that do support \\"esm\\" imports\\n        // however, they do NOT support \\"dynamic\\" imports\\n        // basically this code is for old Edge, v18 and below\\n        const moduleMap = new Map();\\n        win[importFunctionName] = (src) => {\\n            var _a;\\n            const url = new URL(src, base).href;\\n            let mod = moduleMap.get(url);\\n            if (!mod) {\\n                const script = doc.createElement(\'script\');\\n                script.type = \'module\';\\n                script.crossOrigin = orgScriptElm.crossOrigin;\\n                script.src = URL.createObjectURL(new Blob([`import * as m from \'${url}\'; window.${importFunctionName}.m = m;`], {\\n                    type: \'application/javascript\',\\n                }));\\n                // Apply CSP nonce to the script tag if it exists\\n                const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);\\n                if (nonce != null) {\\n                    script.setAttribute(\'nonce\', nonce);\\n                }\\n                mod = new Promise((resolve) => {\\n                    script.onload = () => {\\n                        resolve(win[importFunctionName].m);\\n                        script.remove();\\n                    };\\n                });\\n                moduleMap.set(url, mod);\\n                doc.head.appendChild(script);\\n            }\\n            return mod;\\n        };\\n    }\\n};\\nconst patchCloneNodeFix = (HTMLElementPrototype) => {\\n    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;\\n    HTMLElementPrototype.cloneNode = function (deep) {\\n        if (this.nodeName === \'TEMPLATE\') {\\n            return nativeCloneNodeFn.call(this, deep);\\n        }\\n        const clonedNode = nativeCloneNodeFn.call(this, false);\\n        const srcChildNodes = this.childNodes;\\n        if (deep) {\\n            for (let i = 0; i < srcChildNodes.length; i++) {\\n                // Node.ATTRIBUTE_NODE === 2, and checking because IE11\\n                if (srcChildNodes[i].nodeType !== 2) {\\n                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));\\n                }\\n            }\\n        }\\n        return clonedNode;\\n    };\\n};\\nexport { patchBrowser };\\n","export { setNonce } from \'@stencil/core\';\\nimport { bootstrapLazy } from \'@stencil/core\';\\nimport { patchBrowser } from \'@stencil/core/internal/client/patch-browser\';\\nimport { globalScripts } from \'@stencil/core/internal/app-globals\';\\npatchBrowser().then(options => {\\n  globalScripts();\\n  return bootstrapLazy([/*!__STENCIL_LAZY_DATA__*/], options);\\n});\\n"],"mappings":"uHAkBA,IAAMA,aAAe,WA6BjB,IAAMC,EAAaC,OAAOC,KAAKC,IAC/B,IAAMC,EAA6D,GAenE,GAAuBJ,IAAe,GAAI,CACtCI,EAAKC,aAAe,IAAIC,IAAI,IAAKN,GAAYO,I,CAajD,OAAOC,eAAeJ,EAC1B,EC1EAL,eAAeU,MAAK,SAAAC,GAElB,OAAOC,cAAcC,KAAAC,MAAA,++UAAuCH,EAC9D"}')}}]);