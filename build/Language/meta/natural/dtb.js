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
        name: 'Kadazan, Labuk-Kinabatangan',
        nameT: 'Kadazan, Labuk-Kinabatangan',
        iso3: 'dtb',
        wiki: 'Eastern_Kadazan_language',
        names: 'Eastern Kadazan,Labuk Kadazan,Sogilitan,Sungai,Sungai Kinabatangan,Tindakon,Tompulung'
    });
});
//# sourceMappingURL=dtb.js.map