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
        name: 'Kpelle, Liberia',
        nameT: 'Kpelle, Liberia',
        iso3: 'xpe',
        wiki: 'Kpelle_language',
        names: 'Gbese,Kpele,Kpwessi,Pessa,Pessy'
    });
});
//# sourceMappingURL=xpe.js.map