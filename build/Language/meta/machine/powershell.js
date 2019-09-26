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
        name: 'PowerShell',
        wiki: 'PowerShell',
        type: 'programming',
        languageId: 293,
        aliases: ['posh', 'ps'],
        extensions: ['.ps1', '.psd1', '.psm1'],
        aceMode: 'powershell',
        codemirrorMode: 'powershell',
        codemirrorMimeType: 'application/x-powershell'
    };
    exports.default = meta;
});
//# sourceMappingURL=powershell.js.map