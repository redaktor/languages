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
        name: 'Ada',
        wiki: 'Ada_(programming_language)',
        type: 'programming',
        languageId: 11,
        color: '#02f88c',
        aliases: ['ada95', 'ada2005'],
        extensions: ['.adb', '.ada', '.ads'],
        aceMode: 'ada'
    };
    exports.default = meta;
});
//# sourceMappingURL=ada.js.map