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
        name: 'Tz’utujil',
        nameT: 'Tz’utujil',
        iso3: 'tzj',
        wiki: 'Tz%E2%80%99utujil_language',
        names: 'Eastern Tzutujil,Santiago Atitlán Tzutujil,Tzutuhil,Tzutujil Oriental'
    });
});
//# sourceMappingURL=tzj.js.map