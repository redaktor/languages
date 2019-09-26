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
        name: 'Brainfuck',
        wiki: 'Brainfuck',
        type: 'programming',
        languageId: 38,
        color: '#2F2530',
        extensions: ['.b', '.bf'],
        aceMode: 'text',
        tmScope: 'source.bf',
        codemirrorMode: 'brainfuck',
        codemirrorMimeType: 'text/x-brainfuck'
    };
    exports.default = meta;
});
//# sourceMappingURL=brainfuck.js.map