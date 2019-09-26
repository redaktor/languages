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
        name: 'ǂHua',
        nameT: 'ǂHua',
        iso3: 'huc',
        wiki: '%C7%82%E2%80%99Amkoe_language',
        names: '|Hû,|Hua,‡Hoa,‡Hoã,‡Hoan,‡Hua-Owani'
    });
});
//# sourceMappingURL=huc.js.map