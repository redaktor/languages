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
        name: 'Palawano, Brooke’s Point',
        nameT: 'Palawano, Brooke’s Point',
        iso3: 'plw',
        wiki: 'Palawano_language',
        names: 'Brooke’s Point Palawan,Palawan,Palawanun,Palaweño'
    });
});
//# sourceMappingURL=plw.js.map