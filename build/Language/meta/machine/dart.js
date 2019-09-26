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
        name: 'Dart',
        wiki: 'Dart_(programming_language)',
        type: 'programming',
        languageId: 87,
        color: '#00B4AB',
        extensions: ['.dart'],
        aceMode: 'dart',
        interpreters: ['dart'],
        codemirrorMode: 'dart',
        codemirrorMimeType: 'application/dart'
    };
    exports.default = meta;
});
//# sourceMappingURL=dart.js.map