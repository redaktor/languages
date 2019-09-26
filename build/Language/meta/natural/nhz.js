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
        name: 'Nahuatl, Santa María La Alta',
        nameT: 'Náhuatl de Santa María la Alta',
        iso3: 'nhz',
        wiki: 'Tehuacan%E2%80%93Zongolica_Nahuatl',
        names: 'Náhuatl de Santa María la Alta'
    });
});
//# sourceMappingURL=nhz.js.map