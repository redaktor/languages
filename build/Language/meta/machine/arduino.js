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
        name: 'Arduino',
        wiki: 'Arduino',
        type: 'programming',
        languageId: 21,
        color: '#bd79d1',
        extensions: ['.ino'],
        aceMode: 'c_cpp',
        tmScope: 'source.c++',
        codemirrorMode: 'clike',
        codemirrorMimeType: 'text/x-c++src'
    };
    exports.default = meta;
});
//# sourceMappingURL=arduino.js.map