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
        name: 'Makhuwa',
        nameT: 'Makhuwa',
        iso3: 'vmw',
        wiki: 'Makhuwa_language',
        OT: 'MAK',
        names: 'Central Makhuwa,Emakhuwa,Emakua,Macua,Makhuwa-Makhuwana,Makhuwwa of Nampula,Makoane,Makua,Maquoua',
        hasDetect: true
    });
});
//# sourceMappingURL=vmw.js.map