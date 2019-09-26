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
        name: 'Vala',
        wiki: 'Vala_(programming_language)',
        type: 'programming',
        languageId: 386,
        color: '#fbe5cd',
        extensions: ['.vala', '.vapi'],
        aceMode: 'vala'
    };
    exports.default = meta;
});
//# sourceMappingURL=vala.js.map