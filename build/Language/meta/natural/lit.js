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
        name: 'Lithuanian',
        nameT: 'lietuvių',
        iso1: 'lt',
        iso2: 'lit',
        iso3: 'lit',
        wiki: 'Lithuanian_language',
        OT: 'LTH',
        names: 'Lietuviškai,Lietuviu,Litauische,Litewski,Litovskiy',
        hasDetect: true
    });
});
//# sourceMappingURL=lit.js.map