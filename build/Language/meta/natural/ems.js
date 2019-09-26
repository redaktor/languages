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
        name: 'Yupik, Pacific Gulf',
        nameT: 'Yupik, Pacific Gulf',
        iso3: 'ems',
        wiki: 'Alutiiq_language',
        names: 'Aleut,Alutiiq,Chugach Eskimo,Koniag-Chugach,Pacific Yupik,South Alaska Eskimo,Sugcestun,Sugpiak Eskimo,Sugpiaq Eskimo,Suk'
    });
});
//# sourceMappingURL=ems.js.map