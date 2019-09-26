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
        name: 'GameMonkey Script',
        wiki: 'GameMonkey_Script',
        type: 'programming',
        languageId: 236,
        extensions: ['.monkey'],
        aceMode: 'text',
        tmScope: 'source.monkey'
    };
    exports.default = meta;
});
//# sourceMappingURL=monkey.js.map