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
        name: 'Malagasy, Plateau',
        nameT: 'Malagasy, Plateau',
        iso3: 'plt',
        wiki: 'Malagasy_language',
        names: 'Ambaniandro,Borizany,Hova,Malgache,Official Malagasy,Plateau Malagasy,Standard Malagasy,Teny ofisialy,Malagasy',
        hasDetect: true
    });
});
//# sourceMappingURL=plt.js.map