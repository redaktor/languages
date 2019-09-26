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
        name: 'Augmented Backus–Naur form',
        wiki: 'Augmented_Backus–Naur_form',
        type: 'data',
        languageId: 429,
        extensions: ['.abnf'],
        aceMode: 'text',
        tmScope: 'source.abnf'
    };
    exports.default = meta;
});
//# sourceMappingURL=abnf.js.map