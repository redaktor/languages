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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zapotec, Zaniza',
        nameT: 'Zapotec, Zaniza',
        iso3: 'zpw',
        wiki: 'Zaniza_Zapotec',
        names: 'Papabuco,Western Sola de Vega Zapotec,Zapoteco de Santa María Zaniza'
    });
});
//# sourceMappingURL=zpw.js.map