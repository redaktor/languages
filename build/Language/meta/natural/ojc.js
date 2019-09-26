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
        name: 'Ojibwa, Central',
        nameT: 'Anishinaabemowin (Ojibwemowin)',
        iso3: 'ojc',
        wiki: 'Central_Ojibwa_language',
        names: 'Central Ojibwe,Ojibway,Ojibwe'
    });
});
//# sourceMappingURL=ojc.js.map