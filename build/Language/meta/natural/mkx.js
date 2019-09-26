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
        name: 'Manobo, Kinamiging',
        nameT: 'Manobo, Kinamiging',
        iso3: 'mkx',
        wiki: 'Kamigin_language',
        names: 'Cinamiguin,Kamigin,Kinamigin,Kinamiguin,Manobo,Cinamiguin'
    });
});
//# sourceMappingURL=mkx.js.map