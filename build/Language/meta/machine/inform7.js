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
        name: 'Inform',
        wiki: 'Inform',
        type: 'programming',
        languageId: 166,
        aliases: ['i7', 'inform7'],
        extensions: ['.ni', '.i7x'],
        aceMode: 'text',
        tmScope: 'source.inform7',
        wrap: true
    };
    exports.default = meta;
});
//# sourceMappingURL=inform7.js.map