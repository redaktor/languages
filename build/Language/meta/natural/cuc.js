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
        name: 'Chinantec, Usila',
        nameT: 'Chinantec, Usila',
        iso3: 'cuc',
        wiki: 'Usila_Chinantec',
        names: 'Chinanteco del Oeste Central Alto,Jaú jm_,Jmiih kia’ dzä jii’',
        hasDetect: true
    });
});
//# sourceMappingURL=cuc.js.map