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
        name: 'AutoHotkey',
        wiki: 'AutoHotkey',
        type: 'programming',
        languageId: 26,
        color: '#6594b9',
        aliases: ['ahk'],
        extensions: ['.ahk', '.ahkl'],
        aceMode: 'autohotkey',
        tmScope: 'source.ahk'
    };
    exports.default = meta;
});
//# sourceMappingURL=autohotkey.js.map