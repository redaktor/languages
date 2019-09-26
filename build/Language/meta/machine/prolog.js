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
        name: 'Prolog',
        wiki: 'Prolog',
        type: 'programming',
        languageId: 295,
        color: '#74283c',
        extensions: ['.pl', '.pro', '.prolog', '.yap'],
        aceMode: 'prolog',
        tmScope: 'source.prolog',
        interpreters: ['swipl', 'yap']
    };
    exports.default = meta;
});
//# sourceMappingURL=prolog.js.map