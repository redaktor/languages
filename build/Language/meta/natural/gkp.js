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
        name: 'Kpelle, Guinea',
        nameT: 'Kpelle, Guinea',
        iso3: 'gkp',
        wiki: 'Kpelle_language',
        names: 'Akpese,Gbese,Gerse,Gerze,Guerze,Kpele,Kpelese,Kpelesetina,Kperese,Kpese,Kpwessi,Northern Kpele,Pessa,Pessy',
        hasDetect: true
    });
});
//# sourceMappingURL=gkp.js.map