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
        name: 'Moroccan Sign Language',
        nameT: 'Moroccan Sign Language',
        iso3: 'xms',
        wiki: 'Varieties_of_American_Sign_Language#Moroccan_Sign_Language',
        names: 'Langue des signes du Maroc,Langue des signes marocaine,LSM,MSL'
    });
});
//# sourceMappingURL=xms.js.map