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
        name: 'Moon Script',
        wiki: 'Moon_type',
        type: 'programming',
        languageId: 238,
        extensions: ['.moon'],
        aceMode: 'text',
        interpreters: ['moon']
    };
    exports.default = meta;
});
//# sourceMappingURL=moonscript.js.map