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
        name: 'Pokomo',
        nameT: 'Pokomo',
        iso3: 'pkb',
        wiki: 'Pokomo_language',
        names: 'Kipokomo,Lower Pokomo,Malachini,Pfokomo,Upper Pokomo',
        hasDetect: true
    });
});
//# sourceMappingURL=pkb.js.map