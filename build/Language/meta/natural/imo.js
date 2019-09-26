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
        name: 'Imbongu',
        nameT: 'Imbongu',
        iso3: 'imo',
        wiki: 'Kaugel_language',
        names: 'Au,Aua,Awa,Ibo Ugu,Imbo Ungo,Imbo Ungu,Imbonggo'
    });
});
//# sourceMappingURL=imo.js.map