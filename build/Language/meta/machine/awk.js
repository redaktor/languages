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
        name: 'AWK',
        wiki: 'AWK',
        type: 'programming',
        languageId: 28,
        extensions: ['.awk', '.auk', '.gawk', '.mawk', '.nawk'],
        aceMode: 'text',
        interpreters: ['awk', 'gawk', 'mawk', 'nawk']
    };
    exports.default = meta;
});
//# sourceMappingURL=awk.js.map