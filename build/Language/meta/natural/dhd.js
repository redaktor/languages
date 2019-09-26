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
        name: 'Dhundari',
        nameT: 'Dhundari',
        iso3: 'dhd',
        wiki: 'Dhundari_language',
        names: 'Dhundari-Marwari,Jaipuri'
    });
});
//# sourceMappingURL=dhd.js.map