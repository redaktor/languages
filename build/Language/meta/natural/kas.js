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
        name: 'Kashmiri',
        nameT: 'कश्मीरी / كشميري',
        iso1: 'ks',
        iso2: 'kas',
        iso3: 'kas',
        wiki: 'Kashmiri_language',
        OT: 'KSH',
        names: 'Cashmeeree,Cashmiri,Kacmiri,Kaschemiri,Keshur,Koshur,Keshuri'
    });
});
//# sourceMappingURL=kas.js.map