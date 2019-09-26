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
        name: 'Drubea',
        nameT: 'Drubea',
        iso3: 'duf',
        wiki: 'Ndrumbea_language',
        names: 'Diubea,Dubea,Dumbea,Naa Drubea,Naa Dubea,Ndumbea,Nraa Drubea,Paita'
    });
});
//# sourceMappingURL=duf.js.map