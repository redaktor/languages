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
        name: 'Changthang',
        nameT: 'Changthang',
        iso3: 'cna',
        wiki: 'Lahuli%E2%80%93Spiti_language',
        names: 'Byangskat,Byanskat,Champas,Changs-Skat,Changtang,Changtang Ladakhi,Rong,Rupshu,Stotpa,Upper Ladakhi'
    });
});
//# sourceMappingURL=cna.js.map