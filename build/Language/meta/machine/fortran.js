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
        name: 'Fortran',
        wiki: 'Fortran',
        type: 'programming',
        languageId: 107,
        color: '#4d41b1',
        extensions: ['.f90', '.f', '.f03', '.f08', '.f77', '.f95', '.for', '.fpp'],
        aceMode: 'text',
        tmScope: 'source.fortran.modern',
        codemirrorMode: 'fortran',
        codemirrorMimeType: 'text/x-fortran'
    };
    exports.default = meta;
});
//# sourceMappingURL=fortran.js.map