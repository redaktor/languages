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
        name: 'Extended Backus–Naur form',
        wiki: 'Extended_Backus–Naur_form',
        type: 'data',
        languageId: 430,
        extensions: ['.ebnf'],
        aceMode: 'text',
        tmScope: 'source.ebnf',
        codemirrorMode: 'ebnf',
        codemirrorMimeType: 'text/x-ebnf'
    };
    exports.default = meta;
});
//# sourceMappingURL=ebnf.js.map