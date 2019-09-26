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
        name: 'Mercury',
        wiki: 'Mercury_(programming_language)',
        type: 'programming',
        languageId: 229,
        color: '#ff2b2b',
        extensions: ['.m', '.moo'],
        aceMode: 'prolog',
        tmScope: 'source.mercury',
        interpreters: ['mmi']
    };
    exports.default = meta;
});
//# sourceMappingURL=mercury.js.map