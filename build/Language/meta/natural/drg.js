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
        name: 'Rungus',
        nameT: 'Rungus',
        iso3: 'drg',
        wiki: 'Momogun_language',
        names: 'Dayak Laut,Dusun Dayak,Kadazan,Melobong Rungus,Melubong Rungus,Memagun,Memogun,Momogun,Roongas,Rungus Dusun'
    });
});
//# sourceMappingURL=drg.js.map