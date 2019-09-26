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
        name: 'Téén',
        nameT: 'Téén',
        iso3: 'lor',
        wiki: 'Lorhon_language',
        names: 'Loghon,Lorhon,Loron,Nabe,Tegesie,Ténhé'
    });
});
//# sourceMappingURL=lor.js.map