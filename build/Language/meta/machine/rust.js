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
        name: 'Rust',
        wiki: 'Rust_(programming_language)',
        type: 'programming',
        languageId: 327,
        color: '#dea584',
        extensions: ['.rs', '.rs.in'],
        aceMode: 'rust',
        codemirrorMode: 'rust',
        codemirrorMimeType: 'text/x-rustsrc'
    };
    exports.default = meta;
});
//# sourceMappingURL=rust.js.map