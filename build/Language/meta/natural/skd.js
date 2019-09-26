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
        name: 'Miwok, Southern Sierra',
        nameT: 'Miwok, Southern Sierra',
        iso3: 'skd',
        wiki: 'Southern_Sierra_Miwok',
        names: 'Meewoc,Mewoc,Me-Wuk,Miwoc,Miwokan,Mokélumne,Moquelumnan,San Raphael,Talatui,Talutui,Yosemite'
    });
});
//# sourceMappingURL=skd.js.map