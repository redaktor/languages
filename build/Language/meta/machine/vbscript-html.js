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
        name: 'VBScript HTML',
        wiki: 'VBScript',
        type: 'programming',
        languageId: 389,
        color: '#945db7',
        aliases: ['vb.net', 'vbnet', 'vbs'],
        extensions: ['.vb', '.bas', '.cls', '.frm', '.frx', '.vba', '.vbhtml', '.vbs'],
        aceMode: 'text',
        tmScope: 'source.vbnet',
        codemirrorMode: 'vb',
        codemirrorMimeType: 'text/x-vb'
    };
    exports.default = meta;
});
//# sourceMappingURL=vbscript-html.js.map