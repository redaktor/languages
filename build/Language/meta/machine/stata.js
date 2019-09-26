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
        name: 'Stata',
        wiki: 'Stata',
        type: 'programming',
        languageId: 358,
        extensions: ['.do', '.ado', '.doh', '.ihlp', '.mata', '.matah', '.sthlp'],
        aceMode: 'text'
    };
    exports.default = meta;
});
//# sourceMappingURL=stata.js.map