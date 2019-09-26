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
        name: 'Karen, Pwo Western',
        nameT: 'Karen, Pwo Western',
        iso3: 'pwo',
        wiki: 'Western_Pwo_language',
        names: 'Bassein Pwo Karen,Delta Pwo Karen,Mon Karen,Mutheit,Pathein Pwo Karen,Phlong,Phlong Sho,Pho,Shu,Talaing Karen'
    });
});
//# sourceMappingURL=pwo.js.map