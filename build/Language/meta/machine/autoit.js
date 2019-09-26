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
        name: 'AutoIt',
        wiki: 'AutoIt',
        type: 'programming',
        languageId: 27,
        color: '#1C3552',
        aliases: ['au3', 'AutoIt3', 'AutoItScript'],
        extensions: ['.au3'],
        aceMode: 'autohotkey',
        tmScope: 'source.autoit'
    };
    exports.default = meta;
});
//# sourceMappingURL=autoit.js.map