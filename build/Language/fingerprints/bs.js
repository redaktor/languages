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
    const bs = {
        id: 'bs',
        name: 'Bosnian',
        dependencies: ['bs_Latn', 'bs_Cyrl']
    };
    exports.default = bs;
});
//# sourceMappingURL=bs.js.map