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
        name: 'AspectJ',
        wiki: 'AspectJ',
        type: 'programming',
        languageId: 23,
        color: '#a957b0',
        extensions: ['.aj'],
        aceMode: 'text',
        tmScope: 'source.aspectj'
    };
    exports.default = meta;
});
//# sourceMappingURL=aspectj.js.map