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
        name: 'Sandawe',
        nameT: 'Sandawe',
        iso2: 'sad',
        iso3: 'sad',
        wiki: 'Sandawe_language',
        names: 'Kisandawe,Kissandaui,Sandaui,Sandaweeki,Sandawi,Sandawso,Sandwe'
    });
});
//# sourceMappingURL=sad.js.map