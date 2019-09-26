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
        name: 'DTrace',
        wiki: 'DTrace',
        type: 'programming',
        languageId: 80,
        color: '#ba595e',
        extensions: ['.d', '.di'],
        aceMode: 'd',
        codemirrorMode: 'd',
        codemirrorMimeType: 'text/x-d'
    };
    exports.default = meta;
});
//# sourceMappingURL=d.js.map