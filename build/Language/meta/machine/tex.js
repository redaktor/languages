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
        name: 'Subtext',
        wiki: 'Subtext_(programming_language)',
        type: 'markup',
        languageId: 369,
        color: '#3D6117',
        aliases: ['latex'],
        extensions: ['.tex', '.aux', '.bbx', '.bib', '.cbx', '.cls', '.dtx', '.ins', '.lbx', '.ltx', '.mkii', '.mkiv', '.mkvi', '.sty', '.toc'],
        aceMode: 'tex',
        codemirrorMode: 'stex',
        codemirrorMimeType: 'text/x-stex',
        wrap: true
    };
    exports.default = meta;
});
//# sourceMappingURL=tex.js.map