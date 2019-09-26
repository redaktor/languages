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
        name: 'Nullsoft Scriptable Install System',
        wiki: 'Nullsoft_Scriptable_Install_System',
        type: 'programming',
        languageId: 242,
        extensions: ['.nsi', '.nsh'],
        aceMode: 'text',
        codemirrorMode: 'nsis',
        codemirrorMimeType: 'text/x-nsis'
    };
    exports.default = meta;
});
//# sourceMappingURL=nsis.js.map