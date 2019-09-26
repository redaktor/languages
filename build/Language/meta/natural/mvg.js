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
        name: 'Mixtec, Yucuañe',
        nameT: 'Mixtec, Yucuañe',
        iso3: 'mvg',
        wiki: '%C3%91um%C3%AD_Mixtec',
        names: 'Mixteco de San Bartolomé Yucuañe,Mixteco del Sureste Central,Tnu’u savi'
    });
});
//# sourceMappingURL=mvg.js.map