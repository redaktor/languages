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
        name: 'Itzá',
        nameT: 'Itzá',
        iso3: 'itz',
        wiki: 'Itza%E2%80%99_language',
        names: 'Icaiche Maya,Maya,Petén Itza’ Maya,Yucatec Maya'
    });
});
//# sourceMappingURL=itz.js.map