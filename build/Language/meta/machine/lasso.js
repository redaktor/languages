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
        name: 'Lasso',
        wiki: 'Lasso_(programming_language)',
        type: 'programming',
        languageId: 195,
        color: '#999999',
        aliases: ['lassoscript'],
        extensions: ['.lasso', '.las', '.lasso8', '.lasso9', '.ldml'],
        aceMode: 'text',
        tmScope: 'file.lasso'
    };
    exports.default = meta;
});
//# sourceMappingURL=lasso.js.map