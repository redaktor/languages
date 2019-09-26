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
        name: 'Oxygene',
        wiki: 'Oxygene_(programming_language)',
        type: 'programming',
        languageId: 269,
        color: '#cdd0e3',
        extensions: ['.oxygene'],
        aceMode: 'text',
        tmScope: 'none'
    };
    exports.default = meta;
});
//# sourceMappingURL=oxygene.js.map