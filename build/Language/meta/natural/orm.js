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
        name: 'Oromo, Borana-Arsi-Guji',
        nameT: 'Oromoo',
        iso1: 'om',
        iso2: 'orm',
        iso3: 'orm',
        wiki: 'Oromo_language',
        OT: 'ORO',
        hasDetect: true
    });
});
//# sourceMappingURL=orm.js.map