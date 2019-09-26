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
        name: 'R',
        wiki: 'R_(programming_language)',
        type: 'programming',
        languageId: 307,
        color: '#198CE7',
        aliases: ['R', 'Rscript', 'splus'],
        extensions: ['.r', '.rd', '.rsx'],
        aceMode: 'r',
        interpreters: ['Rscript'],
        codemirrorMode: 'r',
        codemirrorMimeType: 'text/x-rsrc',
        filenames: ['.Rprofile']
    };
    exports.default = meta;
});
//# sourceMappingURL=r.js.map