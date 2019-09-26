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
        name: 'smali',
        wiki: '',
        type: 'programming',
        languageId: 351,
        extensions: ['.smali'],
        aceMode: 'text',
        tmScope: 'source.smali'
    };
    exports.default = meta;
});
//# sourceMappingURL=smali.js.map