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
        name: 'Lillooet',
        nameT: 'Sƛ’aƛ’imxǝc',
        iso3: 'lil',
        wiki: 'Lillooet_language',
        names: 'Slatlemuk,Statimc,St’at’imcets,Stl’atl’imc,Stl’atl’imx,Stlatliumh'
    });
});
//# sourceMappingURL=lil.js.map