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
        name: 'Mathematica',
        wiki: 'Mathematica',
        type: 'programming',
        languageId: 224,
        aliases: ['mma'],
        extensions: ['.mathematica', '.cdf', '.m', '.ma', '.mt', '.nb', '.nbp', '.wl', '.wlt'],
        aceMode: 'text',
        codemirrorMode: 'mathematica',
        codemirrorMimeType: 'text/x-mathematica'
    };
    exports.default = meta;
});
//# sourceMappingURL=mathematica.js.map