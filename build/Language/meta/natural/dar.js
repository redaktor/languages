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
        name: 'Dargwa',
        nameT: 'дарган',
        iso2: 'dar',
        iso3: 'dar',
        wiki: 'Dargwa_language',
        OT: 'DAR',
        names: 'Dargan Medz,Dargi,Dargin,Darginski,Dargintsy,Dargva,Khiurkilinskii,Uslar'
    });
});
//# sourceMappingURL=dar.js.map