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
        name: 'LLVM',
        wiki: 'LLVM',
        type: 'programming',
        languageId: 191,
        color: '#185619',
        extensions: ['.ll'],
        aceMode: 'text'
    };
    exports.default = meta;
});
//# sourceMappingURL=llvm.js.map