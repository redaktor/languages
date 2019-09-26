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
        name: 'Tcl',
        wiki: 'Tcl',
        type: 'programming',
        languageId: 367,
        color: '#e4cc98',
        extensions: ['.tcl', '.adp', '.tm'],
        aceMode: 'tcl',
        interpreters: ['tclsh', 'wish'],
        codemirrorMode: 'tcl',
        codemirrorMimeType: 'text/x-tcl'
    };
    exports.default = meta;
});
//# sourceMappingURL=tcl.js.map