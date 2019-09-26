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
        name: 'F Sharp',
        wiki: 'F_Sharp_(programming_language)',
        type: 'programming',
        languageId: 105,
        color: '#b845fc',
        aliases: ['fsharp'],
        extensions: ['.fs', '.fsi', '.fsx'],
        aceMode: 'text',
        tmScope: 'source.fsharp',
        codemirrorMode: 'mllike',
        codemirrorMimeType: 'text/x-fsharp'
    };
    exports.default = meta;
});
//# sourceMappingURL=fsharp.js.map