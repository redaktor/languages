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
        name: 'Mixe, Coatlan',
        nameT: 'Mixe, Coatlan',
        iso3: 'mco',
        wiki: 'Isthmus_Mixe',
        names: 'Ayuk,Southeastern Mixe',
        hasDetect: true
    });
});
//# sourceMappingURL=mco.js.map