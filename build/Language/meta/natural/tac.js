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
        name: 'Tarahumara, Lowland',
        nameT: 'Tarahumara, Lowland',
        iso3: 'tac',
        wiki: 'Tarahumara_language',
        names: 'Baja Tarahumara,Lowland Tarahumara,Ralámuli de la Baja Tarahumara,Rarámuri,Rarómari raicha,Rocoroibo,Tarahumara del Oeste,Tarahumara del Poniente',
        hasDetect: true
    });
});
//# sourceMappingURL=tac.js.map