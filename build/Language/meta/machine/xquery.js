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
        name: 'XQuery',
        wiki: 'XQuery',
        type: 'programming',
        languageId: 402,
        color: '#5232e7',
        extensions: ['.xquery', '.xq', '.xql', '.xqm', '.xqy'],
        aceMode: 'xquery',
        tmScope: 'source.xq',
        codemirrorMode: 'xquery',
        codemirrorMimeType: 'application/xquery'
    };
    exports.default = meta;
});
//# sourceMappingURL=xquery.js.map