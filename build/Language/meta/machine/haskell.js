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
        name: 'Haskell',
        wiki: 'Haskell_(programming_language)',
        type: 'programming',
        languageId: 157,
        color: '#29b544',
        extensions: ['.hs', '.hsc'],
        aceMode: 'haskell',
        interpreters: ['runhaskell'],
        codemirrorMode: 'haskell',
        codemirrorMimeType: 'text/x-haskell'
    };
    exports.default = meta;
});
//# sourceMappingURL=haskell.js.map