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
        name: 'Sinama',
        nameT: 'Sinama',
        iso3: 'sml',
        wiki: 'Sama_language',
        names: 'Badjaw,Bajau Pela’u,Sama,Sama Dilaut,Sama Kabinga’an,Sama Mandelaut,Sama Pala’u,Sama Siasi,Sama Sitangkai,Sama Ubian,Central Sinama,Orang Laut,Samal,Siasi Sama ("Bajaw")',
        hasDetect: true
    });
});
//# sourceMappingURL=sml.js.map