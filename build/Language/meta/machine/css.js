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
        name: 'Cascading Style Sheets (CSS)',
        wiki: 'Cascading_Style_Sheets',
        type: 'markup',
        languageId: 50,
        color: '#563d7c',
        extensions: ['.css'],
        aceMode: 'css',
        tmScope: 'source.css',
        codemirrorMode: 'css',
        codemirrorMimeType: 'text/css'
    };
    exports.default = meta;
});
//# sourceMappingURL=css.js.map