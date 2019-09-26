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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zapotec, Elotepec',
        nameT: 'Zapotec, Elotepec',
        iso3: 'zte',
        wiki: 'Elotepec_Zapotec',
        names: 'Papabuco,Zapoteco de San Juan Elotepec'
    });
});
//# sourceMappingURL=zte.js.map