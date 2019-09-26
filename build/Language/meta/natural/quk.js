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
        name: 'Quechua, Chachapoyas',
        nameT: 'Quechua, Chachapoyas',
        iso3: 'quk',
        wiki: 'Chachapoyas_Quechua',
        names: 'Amazonas,Llakwash'
    });
});
//# sourceMappingURL=quk.js.map