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
        name: 'Guro',
        nameT: 'Guro',
        iso3: 'goa',
        wiki: 'Guro_language',
        names: 'Baba,Dalo,Dipa,Golo,Gouro,Ku,Kwéndré,Kweni,Lo'
    });
});
//# sourceMappingURL=goa.js.map