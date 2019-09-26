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
        name: 'Lisp',
        wiki: 'Lisp_(programming_language)',
        type: 'programming',
        languageId: 66,
        color: '#3fb68b',
        aliases: ['lisp'],
        extensions: ['.lisp', '.asd', '.cl', '.l', '.lsp', '.ny', '.podsl', '.sexp'],
        aceMode: 'lisp',
        tmScope: 'source.lisp',
        interpreters: ['lisp', 'sbcl', 'ccl', 'clisp', 'ecl'],
        codemirrorMode: 'commonlisp',
        codemirrorMimeType: 'text/x-common-lisp'
    };
    exports.default = meta;
});
//# sourceMappingURL=lisp.js.map