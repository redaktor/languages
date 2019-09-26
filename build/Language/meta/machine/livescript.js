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
        name: 'LiveScript',
        wiki: 'LiveScript',
        type: 'programming',
        languageId: 208,
        color: '#499886',
        aliases: ['live-script', 'ls'],
        extensions: ['.ls', '._ls'],
        aceMode: 'livescript',
        codemirrorMode: 'livescript',
        codemirrorMimeType: 'text/x-livescript',
        filenames: ['Slakefile']
    };
    exports.default = meta;
});
//# sourceMappingURL=livescript.js.map