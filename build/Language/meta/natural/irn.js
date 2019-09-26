(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../meta"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Irántxe',
        nameT: 'Irántxe',
        iso3: 'irn',
        wiki: 'Irantxe_language',
        names: 'Iranche,Iranshe,Iranxe,Münkü'
    });
});
//# sourceMappingURL=irn.js.map