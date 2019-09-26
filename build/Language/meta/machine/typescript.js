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
        name: 'TypeScript',
        wiki: 'TypeScript',
        type: 'programming',
        languageId: 378,
        color: '#2b7489',
        aliases: ['ts'],
        extensions: ['.ts', '.tsx'],
        aceMode: 'typescript',
        tmScope: 'source.ts',
        codemirrorMode: 'javascript',
        codemirrorMimeType: 'application/typescript'
    };
    exports.default = meta;
});
//# sourceMappingURL=typescript.js.map