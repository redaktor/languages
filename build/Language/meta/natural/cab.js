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
        name: 'Garifuna',
        nameT: 'Garifuna',
        iso3: 'cab',
        wiki: 'Garifuna_language',
        names: 'Caribe,Central American Carib,Black Carib,Garífuna,Island Carib ("Black Carib","Moreno")',
        hasDetect: true
    });
});
//# sourceMappingURL=cab.js.map