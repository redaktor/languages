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
        name: 'Standard ML',
        wiki: 'Standard_ML',
        type: 'programming',
        languageId: 357,
        color: '#dc566d',
        aliases: ['sml'],
        extensions: ['.ML', '.fun', '.sig', '.sml'],
        aceMode: 'text',
        tmScope: 'source.ml',
        codemirrorMode: 'mllike',
        codemirrorMimeType: 'text/x-ocaml'
    };
    exports.default = meta;
});
//# sourceMappingURL=sml.js.map