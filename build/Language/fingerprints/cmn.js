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
    const cmn = {
        id: 'cmn',
        name: 'Chinese, Mandarin',
        dependencies: ['cmn_Latn', 'cmn_Hans', 'cmn_Hant']
    };
    exports.default = cmn;
});
//# sourceMappingURL=cmn.js.map