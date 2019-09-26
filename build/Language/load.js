(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dojo/has/main", "@dojo/shim/Promise"], factory);
    }
})(function (require, exports) {
    "use strict";
    ;
    const main_1 = require("@dojo/has/main");
    const Promise_1 = require("@dojo/shim/Promise");
    const nlsPath = './nls/';
    function loadData(lang, keys, fpPath = './fingerprints/', min = '.min') {
        return new Promise_1.default((resolve, reject) => {
            const keysMin = keys.map((key) => [nlsPath, lang, '/', key, min].join(''));
            keys = keys.map((key) => (!lang) ?
                [fpPath, key].join('') : [nlsPath, lang, '/', key].join(''));
            if (main_1.default('host-node')) {
                const modules = [];
                keys.forEach(function (key) {
                    try {
                        var data = require(key);
                        modules.push(data);
                    }
                    catch (err) {
                        return reject(err);
                    }
                });
                if (modules.length === keys.length) {
                    resolve(modules);
                }
                else {
                    reject('Could not load module: ' + keys.join(', '));
                }
            }
            else if (typeof define === 'function' && define.amd) {
                require((!lang) ? keys : keysMin, function () { resolve(arguments); }, (err) => { reject(err); });
            }
            else {
                reject(new Error('Unknown loader'));
            }
        });
    }
    return loadData;
});
//# sourceMappingURL=load.js.map