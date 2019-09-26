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
        name: 'Smalltalk',
        wiki: 'Smalltalk',
        type: 'programming',
        languageId: 352,
        color: '#596706',
        aliases: ['squeak'],
        extensions: ['.st', '.cs'],
        aceMode: 'text',
        codemirrorMode: 'smalltalk',
        codemirrorMimeType: 'text/x-stsrc'
    };
    exports.default = meta;
});
//# sourceMappingURL=smalltalk.js.map