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
        name: 'Chin, Mro-Khimi',
        nameT: 'Chin, Mro-Khimi',
        iso3: 'cmr',
        wiki: 'Mro_language',
        OT: 'QIN',
        names: 'Awa Khami,Chin,Mro-Khimi,Khimi,Khumi Awa,Mro ("Kwe Myi")'
    });
});
//# sourceMappingURL=cmr.js.map