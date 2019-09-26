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
        name: 'Subunit',
        wiki: 'Subunit_(format)',
        type: 'data',
        aceMode: 'text'
    };
    exports.default = meta;
});
//# sourceMappingURL=subunit.js.map