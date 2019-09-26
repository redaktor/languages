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
        name: 'Information Processing Language',
        wiki: 'Information_Processing_Language',
        type: 'programming',
        languageId: 294,
        color: '#0096D8',
        extensions: ['.pde'],
        aceMode: 'text'
    };
    exports.default = meta;
});
//# sourceMappingURL=processing.js.map