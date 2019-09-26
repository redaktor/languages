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
        name: 'Zapotec, Western Tlacolula Valley',
        nameT: 'Zapotec, Western Tlacolula Valley',
        iso3: 'zab',
        wiki: 'Western_Tlacolula_Valley_Zapotec',
        names: 'Guelavía,San Juan Guelavía Zapotec,Western Tlacolula Zapotec,Zapoteco de San Juan,Zapoteco de Tlacolula occidental'
    });
});
//# sourceMappingURL=zab.js.map