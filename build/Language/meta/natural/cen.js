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
        name: 'Cen',
        nameT: 'Cen',
        iso3: 'cen',
        wiki: 'Izere_language',
        names: 'Chen,Icen,Icen FiForon,Icen Ibaas,Ichen'
    });
});
//# sourceMappingURL=cen.js.map