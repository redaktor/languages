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
        name: 'Scheme',
        wiki: 'Scheme_(programming_language)',
        type: 'programming',
        languageId: 343,
        color: '#1e4aec',
        extensions: ['.scm', '.sld', '.sls', '.sps', '.ss'],
        aceMode: 'scheme',
        interpreters: ['guile', 'bigloo', 'chicken', 'csi', 'gosh', 'r6rs'],
        codemirrorMode: 'scheme',
        codemirrorMimeType: 'text/x-scheme'
    };
    exports.default = meta;
});
//# sourceMappingURL=scheme.js.map