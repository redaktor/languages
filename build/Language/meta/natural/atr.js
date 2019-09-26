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
        name: 'Waimiri-Atroari',
        nameT: 'Waimiri-Atroari',
        iso3: 'atr',
        wiki: 'Waimiri-Atroar%C3%AD_language',
        names: 'Atroahí,Atroahy,Atroaí,Atroarí,Atrowari,Atruahí,Ki’nya'
    });
});
//# sourceMappingURL=atr.js.map