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
        name: 'Quichua, Santiago del Estero',
        nameT: 'Quichua, Santiago del Estero',
        iso3: 'qus',
        wiki: 'Santiague%C3%B1o_Quechua',
        names: 'Quichua,Santiagueño Quichua'
    });
});
//# sourceMappingURL=qus.js.map