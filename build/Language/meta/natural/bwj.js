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
        name: 'Bwamu, Láá Láá',
        nameT: 'Bwamu, Láá Láá',
        iso3: 'bwj',
        wiki: 'L%C3%A1%C3%A1_L%C3%A1%C3%A1_Bwamu_language',
        names: 'Kàdenbà,Yere'
    });
});
//# sourceMappingURL=bwj.js.map