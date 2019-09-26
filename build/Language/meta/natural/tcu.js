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
        name: 'Tarahumara, Southeastern',
        nameT: 'Tarahumara, Southeastern',
        iso3: 'tcu',
        wiki: 'Tarahumara_language',
        names: 'Balleza,Chinatú,Rarámari raicha,Tarahumara de Chinatú,Tarahumara del Sur,Tarahumara del Sureste,Turuachi'
    });
});
//# sourceMappingURL=tcu.js.map