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
        name: '1C',
        wiki: '1C_Company',
        type: 'programming',
        color: '#814CCC',
        extensions: ['.bsl', '.os'],
        aceMode: 'text',
        tmScope: 'source.bsl'
    };
    exports.default = meta;
});
//# sourceMappingURL=1c.js.map