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
    const tr = {
        id: 'tr',
        name: 'Turkish',
        dependencies: ['tr_Latn', 'tr_Cyrl']
    };
    exports.default = tr;
});
//# sourceMappingURL=tr.js.map