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
        name: 'Karen, Geko',
        nameT: 'Karen, Geko',
        iso3: 'ghk',
        wiki: 'Geko_Karen',
        names: 'Gaikho,Gekho,Gek’o,Ghekhol,Ghekhu,Gheko,Kakhau,Kayan,Kayan Kakhau,Kekaungdu,Kekhong,Keku,Yathu Gekho'
    });
});
//# sourceMappingURL=ghk.js.map