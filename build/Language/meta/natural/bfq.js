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
        name: 'Badaga',
        nameT: 'ಬಡಗ',
        iso3: 'bfq',
        wiki: 'Badaga_language',
        OT: 'BAD',
        names: 'Badag,Badagu,Baduga,Badugu,Vadagu'
    });
});
//# sourceMappingURL=bfq.js.map