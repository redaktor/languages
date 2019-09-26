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
        name: 'Go',
        wiki: 'Go_(programming_language)',
        type: 'programming',
        languageId: 132,
        color: '#375eab',
        aliases: ['golang'],
        extensions: ['.go'],
        aceMode: 'golang',
        codemirrorMode: 'go',
        codemirrorMimeType: 'text/x-go'
    };
    exports.default = meta;
});
//# sourceMappingURL=go.js.map