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
        name: 'Wára',
        nameT: 'Wára',
        iso3: 'tci',
        wiki: 'Upper_Morehead_language',
        names: 'Ara,Kamindjo,Rouku,Tjokwai,Tokwasa,Upper Morehead,Vara,Wärä,Yumbar'
    });
});
//# sourceMappingURL=tci.js.map