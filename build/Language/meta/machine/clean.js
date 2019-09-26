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
        name: 'Clean',
        wiki: 'Clean_(programming_language)',
        type: 'programming',
        languageId: 60,
        color: '#3F85AF',
        extensions: ['.icl', '.dcl'],
        aceMode: 'text',
        tmScope: 'source.clean'
    };
    exports.default = meta;
});
//# sourceMappingURL=clean.js.map