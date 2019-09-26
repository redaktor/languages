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
        name: 'Maore Comorian',
        nameT: 'Maore Comorian',
        iso3: 'swb',
        wiki: 'Comorian_language',
        OT: 'CMR',
        names: 'Comores Swahili,Comorian,Comoro,Komoro,Maore,Shimaore',
        hasDetect: true
    });
});
//# sourceMappingURL=swb.js.map