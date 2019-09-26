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
        name: 'Java',
        wiki: 'Java_(programming_language)',
        type: 'programming',
        languageId: 181,
        color: '#b07219',
        extensions: ['.java'],
        aceMode: 'java',
        codemirrorMode: 'clike',
        codemirrorMimeType: 'text/x-java'
    };
    exports.default = meta;
});
//# sourceMappingURL=java.js.map