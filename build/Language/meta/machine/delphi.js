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
        name: 'Delphi',
        wiki: 'Delphi_(programming_language)',
        type: 'programming',
        languageId: 67,
        color: '#B0CE4E',
        aliases: ['delphi', 'objectpascal', 'dpr', 'dfm'],
        extensions: ['.cp', '.cps'],
        aceMode: 'pascal',
        tmScope: 'source.pascal',
        codemirrorMode: 'pascal',
        codemirrorMimeType: 'text/x-pascal'
    };
    exports.default = meta;
});
//# sourceMappingURL=delphi.js.map