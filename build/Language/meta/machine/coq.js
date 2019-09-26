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
        name: 'Coq',
        wiki: 'Coq',
        type: 'programming',
        languageId: 69,
        extensions: ['.coq', '.v'],
        aceMode: 'text'
    };
    exports.default = meta;
});
//# sourceMappingURL=coq.js.map