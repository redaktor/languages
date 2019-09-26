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
        name: 'Iceve-Maci',
        nameT: 'Iceve-Maci',
        iso3: 'bec',
        wiki: 'Ceve_language',
        names: 'Bacheve,Bechere,Becheve,Icheve,Ocebe,Ochebe,Ocheve,Utse,Utser,Utseu,Oceve'
    });
});
//# sourceMappingURL=bec.js.map