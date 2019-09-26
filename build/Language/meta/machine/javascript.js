(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta = {
        name: 'JavaScript',
        wiki: 'JavaScript',
        type: 'programming',
        languageId: 183,
        color: '#f1e05a',
        aliases: ['js', 'node'],
        extensions: ['.js', '._js', '.bones', '.es', '.es6', '.frag', '.gs', '.jake', '.jsb', '.jscad', '.jsfl', '.jsm', '.jss', '.njs', '.pac', '.sjs', '.ssjs', '.xsjs', '.xsjslib'],
        aceMode: 'javascript',
        tmScope: 'source.js',
        interpreters: ['node'],
        codemirrorMode: 'javascript',
        codemirrorMimeType: 'text/javascript',
        filenames: ['Jakefile']
    };
    exports.default = meta;
});
//# sourceMappingURL=javascript.js.map