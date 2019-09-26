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
        name: 'Nahuatl Huasteca, Western',
        nameT: 'Nahuatl Huasteca, Western',
        iso3: 'nhw',
        wiki: 'Huasteca_Nahuatl',
        names: 'Náhuatl de la Huasteca Occidental,Náhuatl de Tamazunchale,Western Huasteca Aztec',
        hasDetect: true
    });
});
//# sourceMappingURL=nhw.js.map