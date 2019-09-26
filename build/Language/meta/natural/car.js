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
        name: 'Carib',
        nameT: 'Carib',
        iso2: 'car',
        iso3: 'car',
        wiki: 'Carib_language',
        names: 'Caribe,Cariña,Kalihna,Kalinya,Kari’ña,Kari’na auran,Maraworno,Marworno,Galibi,Kalin’a,Kariña,Kari’nja,Kari’nya,Galibí,Kali’na,Kara’ibs,Kari’na,Karìna',
        hasDetect: true
    });
});
//# sourceMappingURL=car.js.map