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
    const hi = {
        id: 'hi',
        name: 'Hindi',
        dependencies: ['hi_Deva', 'hi_Latn', 'hns']
    };
    exports.default = hi;
});
//# sourceMappingURL=hi.js.map