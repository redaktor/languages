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
        name: 'Lave',
        nameT: 'Lave',
        iso3: 'brb',
        wiki: 'Brao_language',
        names: 'Braou,Brou,Lave,Laveh,Love,Proue,Brao,Brau,Rawe'
    });
});
//# sourceMappingURL=brb.js.map