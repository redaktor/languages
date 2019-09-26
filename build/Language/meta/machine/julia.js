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
        name: 'Julia',
        wiki: 'Julia_(programming_language)',
        type: 'programming',
        languageId: 184,
        color: '#a270ba',
        extensions: ['.jl'],
        aceMode: 'julia',
        interpreters: ['julia'],
        codemirrorMode: 'julia',
        codemirrorMimeType: 'text/x-julia'
    };
    exports.default = meta;
});
//# sourceMappingURL=julia.js.map