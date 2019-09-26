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
        name: 'Galolen',
        nameT: 'Galolen',
        iso3: 'gal',
        wiki: 'Galoli_language',
        names: 'Galoleng,Iliwaki,Ilmedu,Ilwaki,Lir Talo,Galole,Galolem,Galoli,Galolin'
    });
});
//# sourceMappingURL=gal.js.map