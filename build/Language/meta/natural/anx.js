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
        name: 'Andra-Hus',
        nameT: 'Andra-Hus',
        iso3: 'anx',
        wiki: 'Hus_language',
        names: 'Ahus,Ha’us'
    });
});
//# sourceMappingURL=anx.js.map