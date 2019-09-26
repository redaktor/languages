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
        name: 'Kotlin',
        wiki: 'Kotlin_(programming_language)',
        type: 'programming',
        languageId: 189,
        color: '#F18E33',
        extensions: ['.kt', '.ktm', '.kts'],
        aceMode: 'text',
        tmScope: 'source.Kotlin',
        codemirrorMode: 'clike',
        codemirrorMimeType: 'text/x-kotlin'
    };
    exports.default = meta;
});
//# sourceMappingURL=kotlin.js.map