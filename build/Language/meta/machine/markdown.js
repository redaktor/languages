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
        name: 'Markdown',
        wiki: 'Markdown',
        type: 'prose',
        languageId: 222,
        extensions: ['.md', '.markdown', '.mkd', '.mkdn', '.mkdown', '.ron'],
        aceMode: 'markdown',
        tmScope: 'source.gfm',
        codemirrorMode: 'gfm',
        codemirrorMimeType: 'text/x-gfm',
        wrap: true
    };
    exports.default = meta;
});
//# sourceMappingURL=markdown.js.map