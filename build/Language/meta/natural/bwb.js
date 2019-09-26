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
        name: 'Namosi-Naitasiri-Serua',
        nameT: 'Namosi-Naitaasiri-Seerua',
        iso3: 'bwb',
        wiki: 'Namosi-Naitasiri-Serua_language',
        names: 'Namosi-Naitaasiri-Seerua'
    });
});
//# sourceMappingURL=bwb.js.map