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
        name: 'Swift',
        wiki: 'Swift_(programming_language)',
        type: 'programming',
        languageId: 362,
        color: '#ffac45',
        extensions: ['.swift'],
        aceMode: 'text',
        codemirrorMode: 'swift',
        codemirrorMimeType: 'text/x-swift'
    };
    exports.default = meta;
});
//# sourceMappingURL=swift.js.map