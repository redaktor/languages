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
        name: 'AsciiDoc',
        wiki: 'AsciiDoc',
        type: 'prose',
        languageId: 22,
        extensions: ['.asciidoc', '.adoc', '.asc'],
        aceMode: 'asciidoc',
        tmScope: 'text.html.asciidoc',
        wrap: true
    };
    exports.default = meta;
});
//# sourceMappingURL=asciidoc.js.map