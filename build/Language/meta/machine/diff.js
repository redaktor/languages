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
        name: 'Diff utility',
        wiki: 'Diff_utility',
        type: 'data',
        languageId: 88,
        aliases: ['udiff', 'patch'],
        extensions: ['.diff', '.patch'],
        aceMode: 'diff',
        tmScope: 'source.diff',
        codemirrorMode: 'diff',
        codemirrorMimeType: 'text/x-diff'
    };
    exports.default = meta;
});
//# sourceMappingURL=diff.js.map