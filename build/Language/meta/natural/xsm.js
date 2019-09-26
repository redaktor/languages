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
        name: 'Kasem',
        nameT: 'Kasem',
        iso3: 'xsm',
        wiki: 'Kasena_language',
        names: 'Kasena,Kasim,Kassem,Kassena,Kassene',
        hasDetect: true
    });
});
//# sourceMappingURL=xsm.js.map