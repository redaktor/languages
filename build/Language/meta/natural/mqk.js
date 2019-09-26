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
        name: 'Manobo, Rajah Kabunsuwan',
        nameT: 'Rajah Kabungsuan Manobo',
        iso3: 'mqk',
        wiki: 'Agusan_language',
        names: 'Rajah Kabungsuan Manobo'
    });
});
//# sourceMappingURL=mqk.js.map