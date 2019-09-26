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
        name: 'Crystal',
        wiki: 'Crystal_(programming_language)',
        type: 'programming',
        languageId: 72,
        color: '#776791',
        extensions: ['.cr'],
        aceMode: 'ruby',
        tmScope: 'source.crystal',
        interpreters: ['crystal'],
        codemirrorMode: 'crystal',
        codemirrorMimeType: 'text/x-crystal'
    };
    exports.default = meta;
});
//# sourceMappingURL=crystal.js.map