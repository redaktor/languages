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
        name: 'Kauwera',
        nameT: 'Kauwera',
        iso3: 'xau',
        wiki: 'Kauwera_language',
        names: 'Kabera,Kaowerawedj,Kauwerawec,Kauwerawetj,Kawera,Koassa,Tekutameso'
    });
});
//# sourceMappingURL=xau.js.map