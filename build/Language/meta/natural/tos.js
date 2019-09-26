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
        name: 'Totonaco, Sierra',
        nameT: 'Totonaco, Sierra',
        iso3: 'tos',
        wiki: 'Sierra_Totonac_language',
        names: 'Sierra Totonac,Totonaco de la Sierra',
        hasDetect: true
    });
});
//# sourceMappingURL=tos.js.map