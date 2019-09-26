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
        name: 'Yupik, Central Siberian',
        nameT: 'Yupik, Central Siberian',
        iso3: 'ess',
        wiki: 'Central_Siberian_Yupik_language',
        names: 'Asiatic Yupik,Bering Strait,Eskimo,Siberian Yupik,Yoit,Yuit,Yuk,Yupik,Bering Strait Yupik,Saint Lawrence Island Eskimo'
    });
});
//# sourceMappingURL=ess.js.map